import { Response as ExpressResponse, NextFunction } from "express";
import rawBody from "raw-body";
import { allowedOperations, cryptoLib, operations } from "../lib.js";
import { ExpressRequest } from "../helpers.js";
export default async function encryptionMiddleware(
  req: ExpressRequest,
  res: ExpressResponse,
  next: NextFunction
) {
  console.log(
    `[${req.path.replace("/", "")}] ${req.method} encryptionMiddleware`,
    req.get("origin") ?? "",
    allowedOperations
  );

  if (
    process.env.ALLOW_ORIGIN &&
    (process.env.ALLOW_ORIGIN === "*" ||
      process.env.ALLOW_ORIGIN === req.get("origin"))
  ) {
    res.header("Access-Control-Allow-Origin", req.get("origin"));
    res.header("Access-Control-Allow-Methods", "POST");
    res.header("Access-Control-Allow-Headers", "Content-Type,Authorization");
    res.header("Access-Control-Allow-Credentials", "true");
    if (req.method === "OPTIONS") {
      return res.status(204).send();
    }
  }
  if (req.method !== "POST") {
    console.log(`[!reject][encryptionMiddleware] method not POST `, req.method);
    return res.status(403).send();
  }
  const raw = await rawBody(req);
  req.encrypted = true;
  if (allowedOperations.includes(req.path.replace("/", ""))) {
    try {
      req.body = JSON.parse(raw.toString("utf8"));
    } catch (e) {
      console.log(
        `[!reject][encryptionMiddleware] json parse error `,
        raw.toString("utf8")
      );
      return res.status(403).send();
    }
    if (req.path !== "/getQueryToken") {
      req.encrypted = false;

      const path = req.path.replace("/", "") as keyof typeof operations;
      const operation = operations[path];
      if (!operation) {
        return res.send({ error: "Operation not found" });
      }
      const result = await operation(req.body, {
        req,
        res,
        payload: { ...req.body, sender: req.userId! },
      });

      return res.send(result);
    }
    next();
  } else {
    if (!req.queryToken) {
      throw new Error("where is queryToken?");
    }
    cryptoLib
      .decryptBuffer(raw, true, req.queryToken)
      .then((decrypted) => {
        res.setHeader("Content-Type", "application/octet-stream");
        req.body = decrypted;
      })
      .catch((error) => {
        console.log(`[!reject][encryptionMiddleware] encryption error`, error);
        return res.status(403).send();
      });
  }
  return next();
}
