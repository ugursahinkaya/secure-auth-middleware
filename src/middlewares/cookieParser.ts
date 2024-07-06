import { Response, NextFunction } from "express";
import { ExpressRequest } from "src/helpers";

interface Cookies {
  [key: string]: string;
}

const parseCookies = (cookieHeader: string | undefined): Cookies => {
  const cookies: Cookies = {};
  if (!cookieHeader) return cookies;

  const cookiePairs = cookieHeader.split(";");
  cookiePairs.forEach((cookie) => {
    const [key, value] = cookie.split("=").map((c) => c.trim());
    if (key && value) {
      cookies[key] = decodeURIComponent(value);
    }
  });

  return cookies;
};

const cookieParser = (
  req: ExpressRequest,
  _res: Response,
  next: NextFunction
): void => {
  req.cookies = parseCookies(req.headers.cookie);
  console.log(`[${req.path.replace("/", "")}] cookieParser`, req.cookies);
  req.deviceId = req.cookies["deviceId"];
  req.queryToken = req.cookies["queryToken"];
  req.accessToken = req.cookies["accessToken"];
  next();
};

export default cookieParser;
