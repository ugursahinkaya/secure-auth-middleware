import { Request, Response as ExpressResponse } from "express";
import { randomString } from "@ugursahinkaya/utils";
import { tomorrow } from "./utils.js";
import { cryptoLib, encrypt, prisma } from "./lib.js";

export type ExpressRequest = Request & {
  deviceId: string;
  queryToken?: string;
  accessToken?: string;
  userId?: string;
};

export type RestContext = {
  req: ExpressRequest;
  res: ExpressResponse;
  payload: { sender: string };
};

export function checkParams(
  payload: any,
  context: {
    req: ExpressRequest;
    res: ExpressResponse;
    payload: { sender: string };
  }
) {
  if (!context.req) {
    return false;
  }
  if (!payload) {
    return encrypt(
      {
        error: "payload not found",
      },
      context.payload.sender
    );
  }
  if (!context.req) {
    return encrypt(
      {
        error: "context not found",
      },
      context.payload.sender
    );
  }

  const queryToken = context.req.queryToken;
  if (!queryToken) {
    return encrypt(
      {
        error: "queryToken not found",
      },
      context.payload.sender
    );
  }
  return true;
}

export async function checkCookieForQueryToken(req: ExpressRequest) {
  if (!req.cookies["queryToken"]) {
    return false;
  }
  const token = await prisma.queryToken.findFirst({
    where: { token: req.cookies["queryToken"] },
    include: { device: true },
  });

  if (!token || token.device?.deviceId !== req.deviceId) {
    return false;
  }
  req.queryToken = req.cookies["queryToken"];
  return true;
}

export async function getQueryTokenByCookie(req: ExpressRequest) {
  return await prisma.queryToken.findFirst({
    where: { token: req.cookies["queryToken"] },
  });
}

export async function getOrCreateLoginScope() {
  let loginScope = await prisma.accesScope.findFirst({
    where: {
      name: "User Login",
    },
  });
  if (!loginScope) {
    loginScope = await prisma.accesScope.create({
      data: {
        name: "User Login",
      },
    });
  }
  return loginScope;
}

export async function getOrCreateAccessTokenForLogin(
  deviceId: string,
  userId: string
) {
  let accessToken = await prisma.accessToken.findFirst({
    where: {
      device: { deviceId },
      user: { id: userId },
      name: "userLogin",
    },
  });
  if (accessToken) {
    await prisma.refreshToken.deleteMany({
      where: { accessToken: { id: accessToken.id } },
    });
  }

  let loginScope = await getOrCreateLoginScope();
  if (!accessToken) {
    accessToken = await prisma.accessToken.create({
      data: {
        scope: { connect: { id: loginScope.id } },
        token: randomString(40),
        expiryDate: tomorrow(),
        device: { connect: { id: deviceId } },
        user: { connect: { id: userId } },
        name: "userLogin",
      },
    });
  }

  const refreshToken = await prisma.refreshToken.create({
    data: {
      accessToken: { connect: { id: accessToken.id } },
      token: randomString(40),
    },
  });

  await prisma.device.update({
    where: { deviceId },
    data: {
      accessToken: { connect: { id: accessToken.id } },
      refreshToken: { connect: { id: refreshToken.id } },
    },
  });

  return { accessToken, refreshToken };
}

export async function getOrCreateDevice(req: ExpressRequest) {
  if (!req.queryToken) {
    return;
  }
  let device = await prisma.device.findFirst({
    where: { queryToken: { some: { token: req.queryToken } } },
  });
  if (!device) {
    device = await prisma.device.create({
      data: {
        queryToken: { connect: { token: req.queryToken } },
        userAgent: req.headers["user-agent"],
        ip: req.ip,
        referer: req.headers.referer,
        deviceId: req.deviceId,
      },
    });
  }

  return device;
}

export async function moveDeviceToNewQueryToken(
  newToken: string,
  deviceId: string,
  oldToken?: string
) {
  if (oldToken) {
    await prisma.queryToken.delete({
      where: { token: oldToken },
      include: { device: true },
    });
  }

  return await prisma.queryToken.create({
    data: {
      token: newToken,
      device: {
        connectOrCreate: { where: { deviceId }, create: { deviceId } },
      },
    },
  });
}
function moveCryptoKeysToNewQueryToken(oldToken: string, newToken: string) {
  const secret = cryptoLib.keyMap.get(`${oldToken}SCR`);
  if (secret) {
    cryptoLib.keyMap.set(`${newToken}SCR`, secret);
    cryptoLib.keyMap.delete(`${oldToken!}SCR`);
  }
}

export async function renewQueryToken(
  req: ExpressRequest,
  res: ExpressResponse
) {
  const newToken = randomString(40);

  if (req.queryToken) {
    moveCryptoKeysToNewQueryToken(req.queryToken, newToken);
  }

  const newQueryToken = await moveDeviceToNewQueryToken(
    newToken,
    req.deviceId,
    req.queryToken
  );

  req.queryToken = newQueryToken.token;
  res.cookie("queryToken", newQueryToken.token, {
    maxAge: 180000,
    httpOnly: true,
  });
}
