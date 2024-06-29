import { prisma, encrypt } from "../lib.js";
import { verifyPassword } from "../utils.js";
import {
  RestContext,
  checkParams,
  getOrCreateAccessTokenForLogin,
  getOrCreateDevice,
} from "../helpers.js";

export async function login(
  payload: { userName: string; password: string },
  context: RestContext
) {
  console.log(`[login]`, payload);

  const response = checkParams(payload, context);
  if (response !== true) {
    return response;
  }
  const queryToken = context.req.queryToken!;
  const user = await prisma.user.findFirst({
    where: { userName: payload.userName },
  });
  console.log("user", user?.firstName, user?.lastName);
  if (!user) {
    return encrypt(
      {
        error: "Kullanıcı bulunamadı",
      },
      queryToken
    );
  }

  const valid = await verifyPassword(payload.password, user.password);
  if (!valid) {
    return encrypt(
      {
        error: "Hatalı telefon numarası ya da şifre",
      },
      queryToken
    );
  }

  const device = await getOrCreateDevice(context.req, queryToken);
  const { accessToken, refreshToken } = await getOrCreateAccessTokenForLogin(
    device.id,
    user.id
  );
  context.res.cookie("accessToken", accessToken.token, {
    maxAge: 1440000,
    httpOnly: true,
  });
  const { userName, firstName, lastName } = user;

  await prisma.user.update({
    where: { id: user.id },
    data: {
      queryToken: { connect: { token: queryToken } },
    },
  });

  return encrypt(
    {
      userName,
      firstName,
      lastName,
      refreshToken: refreshToken?.token,
      queryToken,
      process: "loggedIn",
    },
    queryToken
  );
}
