import { prisma, encrypt } from "../lib.js";
import { RestContext, checkParams } from "../helpers.js";

export async function getUserData(
  payload: { userQueryToken: string },
  context: RestContext
) {
  console.log(`[getUserData]`, payload);
  const response = checkParams(payload, context);
  if (response !== true) {
    return response;
  }
  if (!context.req.accessToken) {
    return encrypt(
      {
        error: "accessToken must provide",
      },
      context.payload.sender
    );
  }
  const accessToken = await prisma.accessToken.findFirst({
    where: { token: context.req.accessToken },
    select: {
      scope: true,
    },
  });
  if (!accessToken || accessToken.scope?.name !== "Socket Server") {
    return encrypt(
      {
        error: "invalid accessToken",
      },
      context.req.queryToken!
    );
  }
  const queryToken = await prisma.queryToken.findFirst({
    where: { token: payload.userQueryToken },
    select: {
      device: true,
      id: true,
    },
  });

  if (!queryToken?.device) {
    return encrypt(
      {
        error: "user not Found",
      },
      context.req.queryToken!
    );
  }
  const user = await prisma.user.findFirst({
    where: { queryToken: { some: { id: queryToken.id } } },
  });

  if (!user) {
    return encrypt(
      {
        error: "user not Found",
      },
      context.req.queryToken!
    );
  }
  const { firstName, lastName, userName } = user;
  return encrypt({ firstName, lastName, userName }, context.req.queryToken!);
}
