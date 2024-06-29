import { prisma } from "../lib.js";
import { encrypt } from "../lib.js";
import { RestContext, checkParams } from "../helpers.js";

export async function checkUserName(
  payload: { userName: string; register?: boolean },
  context: RestContext
) {
  console.log(`[checkUserName]`, payload);

  const response = checkParams(payload, context);
  if (response !== true) {
    return response;
  }
  const user = await prisma.user.findFirst({
    where: { userName: payload.userName },
  });
  if (!user) {
    return encrypt(
      {
        error: "Kullanıcı bulunamadı",
      },
      context.payload.sender
    );
  }
  return encrypt(
    { status: "ok", data: "password_page" },
    context.payload.sender
  );
}
