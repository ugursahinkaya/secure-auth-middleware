import { Request, Response, NextFunction } from "express";

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
  req: Request,
  _res: Response,
  next: NextFunction
): void => {
  req.cookies = parseCookies(req.headers.cookie);
  next();
};

export default cookieParser;
