import { prisma } from "../../index.js";
import { cryptoLib } from "../crypto";
import {
  RestContext,
  getOrCreateAccessTokenForLogin,
  getOrCreateDevice,
} from "../helpers";
export async function getQueryToken(
  payload: { clientPublicKey: string },
  context: RestContext,
) {
  console.log(`[getQueryToken]`, payload);

  if (!payload.clientPublicKey) {
    return { error: "" };
  }
  await cryptoLib.generateKey(context.req.queryToken!);
  await cryptoLib.importPublicKey(
    cryptoLib.base64ToArrayBuffer(payload.clientPublicKey),
    context.req.queryToken!,
  );
  const publicKey = cryptoLib.arrayBufferToBase64(
    await cryptoLib.exportKey(context.req.queryToken!),
  );
  cryptoLib.keyMap.delete(`${context.req.queryToken!}PBL`);
  cryptoLib.keyMap.delete(`${context.req.queryToken!}PRV`);

  if (context.req.userId) {
    const user = await prisma.user.findFirst({
      where: { id: context.req.userId },
      select: {
        firstName: true,
        lastName: true,
        username: true,
      },
    });
    if (user) {
      await prisma.queryToken.update({
        where: { token: context.req.queryToken },
        data: {
          user: { connect: { username: user.username } },
        },
      });
      const device = await getOrCreateDevice(
        context.req,
        context.req.queryToken!,
      );
      const { accessToken } = await getOrCreateAccessTokenForLogin(
        device.id,
        context.req.userId,
      );
      context.res.cookie("accessToken", accessToken.token, {
        maxAge: 1440000,
        httpOnly: true,
      });
      return {
        serverPublicKey: publicKey,
        queryToken: context.req.queryToken,
        process: "loggedIn",
      };
    }
  }

  const result = {
    serverPublicKey: publicKey,
    process: "loginOrRegister",
  };
  return result;
}
