import { Response as ExpressResponse, NextFunction } from "express";
import { senderCRC } from "../utils.js";
import {
  ExpressRequest,
  checkCookieForQueryToken,
  renewQueryToken,
} from "../helpers.js";

export async function queryTokenMiddleware(
  req: ExpressRequest,
  res: ExpressResponse,
  next: NextFunction
) {
  const sender = senderCRC(req);

  console.log(`[${req.path.replace("/", "")}] queryTokenMiddleware`);

  if (req.path === "/getQueryToken") {
    await renewQueryToken(req, res, sender);
    return next();
  }

  if (
    req.path !== "/getQueryToken" &&
    !(await checkCookieForQueryToken(req, sender))
  ) {
    return res.status(403).send();
  }
  await renewQueryToken(req, res, sender);
  next();
}
