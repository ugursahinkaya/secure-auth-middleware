import { prisma } from "../../index.js";
import { encrypt } from "../crypto.js";
import { hashPassword } from "../utils.js";
import {
  RestContext,
  checkParams,
  getOrCreateAccessTokenForLogin,
  getOrCreateDevice,
} from "../helpers.js";

export async function register(
  payload: {
    phone: string;
    firstName: string;
    lastName: string;
    password: string;
    password2: string;
  },
  context: RestContext
) {
  console.log(`[register]`, payload);
  const response = checkParams(payload, context);

  if (response !== true) {
    return response;
  }
  const queryToken = context.req.queryToken!;

  const user = await prisma.user.findFirst({
    where: { phone: payload.phone },
  });

  if (user) {
    return encrypt(
      {
        error: "Kullanıcı zaten kayıtlı",
      },
      context.payload.sender
    );
  }
  if (payload.password !== payload.password2) {
    return encrypt(
      {
        error: "Şifreler eşleşmiyor",
      },
      context.payload.sender
    );
  }
  const newUser = await prisma.user.create({
    data: {
      phone: payload.phone,
      firstName: payload.firstName,
      lastName: payload.lastName,
      password: await hashPassword(payload.password),
    },
  });

  const device = await getOrCreateDevice(context.req, queryToken);
  const { accessToken, refreshToken } = await getOrCreateAccessTokenForLogin(
    device.id,
    newUser.id
  );

  context.res.cookie("accessToken", accessToken.token, {
    maxAge: 1440000,
    httpOnly: true,
  });

  const { phone, firstName, lastName } = newUser;
  return encrypt(
    { phone, firstName, lastName, refreshToken: refreshToken.token },
    context.payload.sender
  );
}
