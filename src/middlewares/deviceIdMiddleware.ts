import { Response as ExpressResponse, NextFunction } from "express";
import { ExpressRequest } from "../helpers.js";
import { prisma } from "../lib.js";

export default async function deviceIdMiddleware(
  req: ExpressRequest,
  res: ExpressResponse,
  next: NextFunction
) {
  console.log(
    `[${req.path.replace("/", "")}] deviceIdMiddleware req.encrypted:`
  );

  if (req.encrypted) {
    return next();
  }
  const device = await prisma.device.findFirst({
    where: { deviceId: req.deviceId },
  });

  if (device && req.ip === device.ip) {
    return next();
  }
  console.log(
    `[!reject][deviceIdMiddleware] device middleware req.ip:${req.ip} device:`,
    device
  );
  return res.status(403).send();
}
