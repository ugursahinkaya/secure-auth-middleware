import { Response as ExpressResponse, NextFunction } from "express";
import {
  ExpressRequest,
  checkCookieForQueryToken,
  renewQueryToken,
} from "../helpers.js";

export default async function queryTokenMiddleware(
  req: ExpressRequest,
  res: ExpressResponse,
  next: NextFunction
) {
  console.log(`[${req.path.replace("/", "")}] queryTokenMiddleware`);

  if (req.path === "/getQueryToken") {
    await renewQueryToken(req, res);
    return next();
  }

  if (req.path !== "/getQueryToken" && !(await checkCookieForQueryToken(req))) {
    return res.status(403).send();
  }
  await renewQueryToken(req, res);
  next();
}
