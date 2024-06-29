import { prisma } from "../lib.js";
import { cryptoLib, encrypt } from "../lib.js";
import { RestContext, checkParams } from "../helpers.js";

export async function logout(payload: {}, context: RestContext) {
  console.log(`[logout]`, payload);
  context.res.clearCookie("accessToken");
  const response = checkParams(payload, context);
  if (response !== true) {
    return response;
  }
  context.res.clearCookie("queryToken");
  cryptoLib.keyMap.delete(`${context.req.cookies["queryToken"]!}SCR`);
  const queryToken = context.req.queryToken!;
  const token = await prisma.queryToken.findFirst({
    where: { token: queryToken },
    include: { device: true },
  });
  if (!token || !token.device) {
    return encrypt(
      {
        error: "Unexpected error",
      },
      context.payload.sender,
    );
  }
  await prisma.device.update({
    where: { id: token.device.id },
    data: { queryToken: { disconnect: { id: token.id } } },
  });
  await prisma.queryToken.delete({
    where: { id: token.id },
  });
  return encrypt({ process: "loggedOut" }, context.payload.sender);
}
