import { calculateCRC32 } from "@ugursahinkaya/utils";

import bcrypt from "bcryptjs";
import { ExpressRequest } from "./helpers";

const saltRounds = 10;

export function senderCRC(req: ExpressRequest) {
  return calculateCRC32(
    req.headers["user-agent"] ?? "" + req.ip + req.headers.referer ?? "",
  );
}

export async function hashPassword(password: string): Promise<string> {
  const salt = await bcrypt.genSalt(saltRounds);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
}
export async function verifyPassword(
  plainPassword: string,
  hashedPassword: string,
): Promise<boolean> {
  return await bcrypt.compare(plainPassword, hashedPassword);
}

export function tomorrow() {
  const now = new Date();
  const tomorrow = new Date(now);
  tomorrow.setDate(now.getDate() + 1);
  return tomorrow;
}
