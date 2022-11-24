import { PrismaClient } from "@prisma/client";
export declare const CLIENT_URL: string;
export declare const SERVER_PORT: string;
export declare const prisma: PrismaClient<import(".prisma/client").Prisma.PrismaClientOptions, never, import(".prisma/client").Prisma.RejectOnNotFound | import(".prisma/client").Prisma.RejectPerOperation | undefined>;
