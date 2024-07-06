import { Response as ExpressResponse, NextFunction } from "express";
import {
  ExpressRequest,
  checkCookieForQueryToken,
  renewQueryToken,
} from "../helpers.js";
import { logger } from "src/lib.js";

export default async function queryTokenMiddleware(
  req: ExpressRequest,
  res: ExpressResponse,
  next: NextFunction
) {
  logger.debug(req.path, "queryTokenMiddleware");

  if (req.path === "/getQueryToken") {
    await renewQueryToken(req, res);
    return next();
  }

  if (req.path !== "/getQueryToken" && !(await checkCookieForQueryToken(req))) {
    logger.warn("queryToken cookie not provided", "queryTokenMiddleware");

    return res.status(403).send();
  }
  await renewQueryToken(req, res);
  next();
}
