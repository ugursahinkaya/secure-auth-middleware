import { randomString } from "@ugursahinkaya/utils";
import { prisma, encrypt } from "../lib.js";
import { RestContext, checkParams } from "../helpers.js";
import { tomorrow } from "../utils.js";

export async function refreshToken(
  payload: { refreshToken: string },
  context: RestContext
) {
  console.log(`[refreshToken]`, payload);
  const queryToken = context.req.queryToken!;
  const response = checkParams(payload, context);
  if (response !== true) {
    return response;
  }
  const token = await prisma.refreshToken.findFirst({
    where: { token: payload.refreshToken },
  });
  if (!token || !token.userId) {
    console.log(`[refreshToken] invalid refreshToken`, token);
    return encrypt({ error: "invalid refreshToken" }, queryToken);
  }
  let accessToken;
  try {
    accessToken = await prisma.accessToken.update({
      where: { id: token.accessTokenId },
      data: { token: randomString(40), expiryDate: tomorrow() },
    });
  } catch {
    accessToken = await prisma.accessToken.create({
      data: {
        id: token.accessTokenId,
        name: "userLogin",
        token: randomString(40),
        expiryDate: tomorrow(),
        user: { connect: { id: token.userId } },
        refreshToken: { connect: { id: token.id } },
      },
    });
  }

  if (accessToken.userId) {
    await prisma.queryToken.update({
      where: { token: queryToken },
      data: { user: { connect: { id: accessToken.userId } } },
    });
    context.res.cookie("accessToken", accessToken.token, {
      maxAge: 144e4,
      httpOnly: true,
    });
    return encrypt(
      {
        refreshToken: payload.refreshToken,
        accessToken: accessToken.token,
        expiryDate: accessToken.expiryDate,
        queryToken: context.req.queryToken,
      },
      queryToken
    );
  }
  console.log(`[refreshToken] invalid accessToken`, token);
  return encrypt({ error: "invalid accessToken" }, queryToken);
}
