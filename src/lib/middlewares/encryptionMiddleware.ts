import { Response as ExpressResponse, NextFunction } from "express";
import { cryptoLib } from "../crypto";
import rawBody from "raw-body";
import { ExpressRequest } from "../helpers";

export async function encryptionMiddleware(
  req: ExpressRequest,
  res: ExpressResponse,
  next: NextFunction,
) {
  console.log(
    `\n${req.get("origin") ?? ""} [${req.path.replace("/", "")} ${req.method}] encryptionMiddleware`,
  );
  if (req.get("origin")) {
    res.header("Access-Control-Allow-Origin", req.get("origin"));
    res.header("Access-Control-Allow-Methods", "POST");
    res.header("Access-Control-Allow-Headers", "Content-Type,Authorization");
    res.header("Access-Control-Allow-Credentials", "true");
  }
  if (req.method === "OPTIONS") {
    return res.status(204).send();
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
    const queryToken = req.cookies["queryToken"];
    cryptoLib
      .decryptBuffer(raw, true, queryToken)
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
