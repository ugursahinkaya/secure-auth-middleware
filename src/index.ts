import express from "express";
import { PrismaClient } from "./prisma-client";
import { useSecureServerMiddlewares } from "./lib";
export const prisma = new PrismaClient();
const server = express();
useSecureServerMiddlewares(server);
server.listen(5781, () => {
  console.log(`Server is running at http://localhost:${5781}`);
});
