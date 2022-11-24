"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const origin = [config_1.CLIENT_URL];
app.use((0, cookie_parser_1.default)());
app.use((0, cors_1.default)({
    origin,
    credentials: true,
}));
app.get("/ping", (_, res) => res.json("pong"));
app.listen(config_1.SERVER_PORT, () => console.log(`Server listening on port ${config_1.SERVER_PORT}`));
//# sourceMappingURL=index.js.map