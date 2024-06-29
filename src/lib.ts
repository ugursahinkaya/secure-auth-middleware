import { PrismaClient } from "./auth-client/index.js";
import { checkUserName } from "./operations/checkUserName.js";
import { getQueryToken } from "./operations/getQueryToken.js";
import { login } from "./operations/login.js";
import { logout } from "./operations/logout.js";

import { register } from "./operations/register.js";
import { getUserData } from "./operations/getUserData.js";
import { refreshToken } from "./operations/refreshToken.js";

import { encryptionMiddleware } from "./middlewares/encryptionMiddleware.js";
import { accessTokenMiddleware } from "./middlewares/accessTokenMiddleware.js";
import { queryTokenMiddleware } from "./middlewares/queryTokenMiddleware.js";
import { secureFetchEndpointsMiddleware } from "./middlewares/secureFetchEndpointsMiddleware.js";
import { Express } from "express";
import cookieParser from "cookie-parser";
import { CryptoLib } from "@ugursahinkaya/crypto-lib";

export const cryptoLib = new CryptoLib();
export async function encrypt(data: Record<string, any>, receiver: string) {
  try {
    const [ciphertext, iv] = await cryptoLib.encrypt(
      JSON.stringify(data),
      receiver
    );
    const concatenatedArray = new Uint8Array(
      iv.byteLength + ciphertext.byteLength
    );
    concatenatedArray.set(new Uint8Array(iv), 0);
    concatenatedArray.set(new Uint8Array(ciphertext), iv.byteLength);

    return Buffer.from(concatenatedArray);
  } catch {
    return data;
  }
}
export const prisma = new PrismaClient();
export const operations = {
  checkUserName,
  getQueryToken,
  login,
  logout,
  register,
  getUserData,
  refreshToken,
};
export const middlewares = {
  encryptionMiddleware,
  accessTokenMiddleware,
  queryTokenMiddleware,
  secureFetchEndpointsMiddleware,
};

export function useSecureServerMiddlewares(server: Express) {
  server.disable("x-powered-by");
  server.use(cookieParser());
  server.use(encryptionMiddleware);
  server.use(queryTokenMiddleware);
  server.use(accessTokenMiddleware);
  server.use(secureFetchEndpointsMiddleware);
}
