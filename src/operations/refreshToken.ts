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
    include: { accessToken: true },
  });
  if (token && token.accessTokenId) {
    const accessToken = await prisma.accessToken.update({
      where: { id: token.accessTokenId },
      data: { token: randomString(40), expiryDate: tomorrow() },
    });
    context.res.cookie("accessToken", accessToken.token, {
      maxAge: 1440000,
      httpOnly: true,
    });
    return encrypt(
      {
        refreshToken: payload.refreshToken,
        accessToken: accessToken.token,
        expiryDate: accessToken.expiryDate,
      },
      queryToken
    );
  }
  return encrypt(
    {
      error: "invalid refreshToken",
    },
    queryToken
  );
}
