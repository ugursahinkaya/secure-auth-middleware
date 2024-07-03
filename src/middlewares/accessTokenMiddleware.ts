import { Response as ExpressResponse, NextFunction } from "express";
import { tomorrow } from "../utils.js";
import { ExpressRequest } from "../helpers.js";
import { prisma } from "../lib.js";

export default async function accessTokenMiddleware(
  req: ExpressRequest,
  _res: ExpressResponse,
  next: NextFunction
) {
  console.log(`[${req.path.replace("/", "")}] accessTokenMiddleware`);

  const token = req.accessToken;
  if (token) {
    const accessToken = await prisma.accessToken.findFirst({
      where: { token },
    });
    if (accessToken) {
      const user = await prisma.user.findFirst({
        where: { accessToken: { some: { token } } },
      });
      if (user) {
        req.userId = user.id;
        await prisma.accessToken.update({
          where: { token },
          data: { expiryDate: tomorrow() },
        });
      }
    }
    req.accessToken = token;
  }

  next();
}
