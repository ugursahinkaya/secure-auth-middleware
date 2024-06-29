import { prisma } from "../../index.js";
import { encrypt } from "../crypto.js";
import { RestContext, checkParams } from "../helpers.js";

export async function checkUserName(
  payload: { username: string; register?: boolean },
  context: RestContext,
) {
  console.log(`[checkPhoneNumber]`, payload);

  const response = checkParams(payload, context);
  if (response !== true) {
    return response;
  }
  const user = await prisma.user.findFirst({
    where: { username: payload.username },
  });
  if (!user) {
    return encrypt(
      {
        error: "Kullanıcı bulunamadı",
      },
      context.payload.sender,
    );
  }
  return encrypt(
    { status: "ok", data: "password_page" },
    context.payload.sender,
  );
}
