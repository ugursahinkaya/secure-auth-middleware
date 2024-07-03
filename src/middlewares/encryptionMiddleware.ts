import { Response as ExpressResponse, NextFunction } from "express";
import rawBody from "raw-body";
import { cryptoLib } from "../lib.js";
import { ExpressRequest } from "../helpers.js";

export default async function encryptionMiddleware(
  req: ExpressRequest,
  res: ExpressResponse,
  next: NextFunction
) {
  console.log(
    `[${req.path.replace("/", "")}] ${req.method} encryptionMiddleware`,
    req.get("origin") ?? ""
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
    return res.status(403).send();
  }
  const raw = await rawBody(req);

  if (req.path === "/getQueryToken") {
    try {
      req.body = JSON.parse(raw.toString("utf8"));
    } catch (e) {
      return res.status(403).send();
    }
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
        console.log(error);
        return res.status(403).send();
      });
  }
  return next();
}
