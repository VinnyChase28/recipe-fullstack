import { CLIENT_URL, SERVER_PORT } from "./config";
import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";

const app = express();

const origin = [CLIENT_URL];

app.use(cookieParser());
app.use(
  cors({
    origin,
    credentials: true,
  })
);

app.get("/ping", (_, res) => res.json("pong"));

app.listen(SERVER_PORT, () =>
  console.log(`Server listening on port ${SERVER_PORT}`)
);
