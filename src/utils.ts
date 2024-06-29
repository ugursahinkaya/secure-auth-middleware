import { calculateCRC32 } from "@ugursahinkaya/utils";
import bcrypt from "bcryptjs";

import { ExpressRequest } from "./helpers.js";

const saltRounds = 14;
const crcKeys = [
  "host",
  "origin",
  "user-agent",
  "sec-ch-ua",
  "sec-ch-ua-platform",
  "sec-fetch-mode",
  "sec-fetch-site",
  "sec-fetch-dest",
  "accept-encoding",
];
export function senderCRC(req: ExpressRequest) {
  return calculateCRC32(
    req.ip + crcKeys.map((key) => req.headers[key]).join("")
  );
}

export async function hashPassword(password: string): Promise<string> {
  const salt = await bcrypt.genSalt(saltRounds);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
}
export async function verifyPassword(
  plainPassword: string,
  hashedPassword: string
): Promise<boolean> {
  return await bcrypt.compare(plainPassword, hashedPassword);
}

export function tomorrow() {
  const now = new Date();
  const tomorrow = new Date(now);
  tomorrow.setDate(now.getDate() + 1);
  return tomorrow;
}
