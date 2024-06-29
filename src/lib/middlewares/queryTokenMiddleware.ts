import { Response as ExpressResponse, NextFunction } from "express";
import { senderCRC } from "../utils";
import {
  ExpressRequest,
  checkCookieForQueryToken,
  renewQueryToken,
} from "../helpers";

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
