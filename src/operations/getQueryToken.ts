import { prisma, cryptoLib, logger } from "../lib.js";
import {
  RestContext,
  getOrCreateAccessTokenForLogin,
  getOrCreateDevice,
} from "../helpers.js";
export async function getQueryToken(
  payload: { clientPublicKey: string },
  context: RestContext
) {
  logger.debug(
    { queryToken: context.req.queryToken, payload },
    "getQueryToken"
  );

  if (!payload.clientPublicKey) {
    return { error: "" };
  }
  await cryptoLib.generateKey(context.req.queryToken!);
  await cryptoLib.importPublicKey(
    cryptoLib.base64ToArrayBuffer(payload.clientPublicKey),
    context.req.queryToken!
  );
  const publicKey = cryptoLib.arrayBufferToBase64(
    await cryptoLib.exportKey(context.req.queryToken!)
  );
  if (context.req.userId) {
    const user = await prisma.user.findFirst({
      where: { id: context.req.userId },
      select: {
        firstName: true,
        lastName: true,
        userName: true,
      },
    });
    if (user) {
      await prisma.queryToken.update({
        where: { token: context.req.queryToken },
        data: {
          user: { connect: { userName: user.userName } },
        },
      });
      await getOrCreateDevice(context.req);
      const { accessToken } = await getOrCreateAccessTokenForLogin(
        context.req.deviceId,
        context.req.userId
      );
      context.res.cookie("accessToken", accessToken.token, {
        maxAge: 1440000,
        httpOnly: true,
      });
      context.res.cookie("queryToken", context.req.queryToken, {
        maxAge: 180000,
        httpOnly: true,
      });
      return {
        serverPublicKey: publicKey,
        queryToken: context.req.queryToken,
        process: "loggedIn",
      };
    }
  }
  context.res.cookie("queryToken", context.req.queryToken, {
    maxAge: 180000,
    httpOnly: true,
  });
  const result = {
    serverPublicKey: publicKey,
    process: "loginOrRegister",
  };
  return result;
}
