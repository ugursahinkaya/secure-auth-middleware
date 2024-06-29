import { Response as ExpressResponse, NextFunction } from "express";
import { ExpressRequest } from "../helpers";
import { operations } from "..";
export async function secureFetchEndpointsMiddleware(
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
  console.log(`[${req.path.replace("/", "")}] req.userId: ${req.userId}`);
  console.log(`[${req.path.replace("/", "")}] queryToken: ${req.queryToken}`);
  console.log("");

  return res.send(result);
}
