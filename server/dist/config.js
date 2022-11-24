"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = exports.SERVER_PORT = exports.CLIENT_URL = void 0;
const client_1 = require("@prisma/client");
exports.CLIENT_URL = process.env.CLIENT_URL;
exports.SERVER_PORT = process.env.SERVER_PORT;
exports.prisma = new client_1.PrismaClient();
//# sourceMappingURL=config.js.map