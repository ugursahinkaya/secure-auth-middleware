import { NextFunction, Response } from "express";
import cookieParser from "./middlewares/cookieParser.js";
import encryptionMiddleware from "./middlewares/encryptionMiddleware.js";
import accessTokenMiddleware from "./middlewares/accessTokenMiddleware.js";
import queryTokenMiddleware from "./middlewares/queryTokenMiddleware.js";
import secureFetchEndpointsMiddleware from "./middlewares/secureFetchEndpointsMiddleware.js";
import { ExpressRequest } from "./helpers.js";
const middlewares = [
  cookieParser,
  encryptionMiddleware,
  accessTokenMiddleware,
  queryTokenMiddleware,
  secureFetchEndpointsMiddleware,
];
export default (
  req: ExpressRequest,
  res: Response,
  next: NextFunction
): void => {
  let index = -1;
  const nextMiddleware = () => {
    index++;
    if (index >= middlewares.length) {
      return next();
    }
    middlewares[index]?.(req, res, nextMiddleware);
  };

  nextMiddleware();
};
