import { NextFunction, Response } from "express";
import cookieParser from "./middlewares/cookieParser.js";
import encryptionMiddleware from "./middlewares/encryptionMiddleware.js";
import accessTokenMiddleware from "./middlewares/accessTokenMiddleware.js";
import queryTokenMiddleware from "./middlewares/queryTokenMiddleware.js";
import secureFetchEndpointsMiddleware from "./middlewares/secureFetchEndpointsMiddleware.js";
import deviceIdMiddleware from "./middlewares/deviceIdMiddleware.js";
import { ExpressRequest } from "./helpers.js";
import { allowedOperations, logger, useLogger } from "./lib.js";
import { LogLevel } from "@ugursahinkaya/shared-types";

const middlewares = [
  cookieParser,
  encryptionMiddleware,
  deviceIdMiddleware,
  accessTokenMiddleware,
  queryTokenMiddleware,
  secureFetchEndpointsMiddleware,
];
export default (unencryptedOperationNames: [], logLevel?: LogLevel) => {
  useLogger(logLevel);
  return (req: ExpressRequest, res: Response, next: NextFunction): void => {
    logger.debug(req.path);
    if (unencryptedOperationNames) {
      unencryptedOperationNames.map((operation) => {
        allowedOperations.push(operation);
      });
    }
    if (!req.middlewareIndex) {
      req.middlewareIndex = -1;
    }
    const nextMiddleware = () => {
      req.middlewareIndex++;
      if (req.middlewareIndex >= middlewares.length) {
        return next();
      }

      middlewares[req.middlewareIndex]?.(req, res, nextMiddleware);
    };

    nextMiddleware();
  };
};
