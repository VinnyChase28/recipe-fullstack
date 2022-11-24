import { PrismaClient } from "@prisma/client";

export const CLIENT_URL = process.env.CLIENT_URL!;
export const SERVER_PORT = process.env.SERVER_PORT!;

export const prisma = new PrismaClient();
