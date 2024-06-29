import { prisma } from "../../index.js";
import { encrypt } from "../crypto.js";
import { RestContext, checkParams } from "../helpers.js";

export async function logout(
  payload: { phone: string; password: string },
  context: RestContext
) {
  console.log(`[logout]`, payload);
  const response = checkParams(payload, context);
  if (response !== true) {
    context.res.clearCookie("accessToken");
    return response;
  }
  const queryToken = context.req.queryToken!;
  const token = await prisma.queryToken.findFirst({
    where: { token: queryToken },
    include: { device: true },
  });
  if (!token || !token.device) {
    context.res.clearCookie("accessToken");
    return encrypt(
      {
        error: "Unexpected error",
      },
      context.payload.sender
    );
  }
  await prisma.device.update({
    where: { id: token.device.id },
    data: { queryToken: { disconnect: { id: token.id } } },
  });
  await prisma.queryToken.delete({
    where: { id: token.id },
  });
  context.res.clearCookie("accessToken");
  return encrypt({ process: "loggedOut" }, context.payload.sender);
}
