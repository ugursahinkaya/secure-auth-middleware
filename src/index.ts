import { NextFunction, Response } from "express";
import { encryptionMiddleware } from "./middlewares/encryptionMiddleware";
import { accessTokenMiddleware } from "./middlewares/accessTokenMiddleware";
import { queryTokenMiddleware } from "./middlewares/queryTokenMiddleware";
import { secureFetchEndpointsMiddleware } from "./middlewares/secureFetchEndpointsMiddleware";
import { ExpressRequest } from "./helpers";
const middlewares = [
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
  let index = 0;

  const nextMiddleware = () => {
    if (index >= middlewares.length) {
      return next();
    }
    middlewares[index]?.(req, res, nextMiddleware);
    index++;
  };

  nextMiddleware();
};
