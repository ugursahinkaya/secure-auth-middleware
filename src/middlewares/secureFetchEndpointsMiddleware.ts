import { Response as ExpressResponse, NextFunction } from "express";
import { ExpressRequest } from "../helpers.js";
import { operations } from "../lib.js";
export default async function secureFetchEndpointsMiddleware(
  req: ExpressRequest,
  res: ExpressResponse,
  next: NextFunction
) {
  console.log(`[${req.path.replace("/", "")}] secureFetchEndpointsMiddleware`);

  const path = req.path.replace("/", "") as keyof typeof operations;
  const operation = operations[path];
  if (!operation) {
    return next();
  }
  const result = await operation(req.body, {
    req,
    res,
    payload: { ...req.body, sender: req.userId! },
  });

  return res.send(result);
}
