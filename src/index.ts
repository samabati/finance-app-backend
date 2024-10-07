import express, { Express, Request, Response } from "express";
import { env } from "process";
import { PrismaClient } from "@prisma/client";
import { errorMiddleware } from "./middlewares/error";
import {
  budgetRouter,
  authRouter,
  potsRouter,
  transactionRouter,
} from "./routes";
import cors from "cors";
import config from "../config/config";

const app: Express = express();

app.use(
  cors({
    origin: config.corsOrigin,
    methods: "GET, POST, PUT, DELETE, OPTIONS, PATCH",
    allowedHeaders: "Authorization, Content-Type",
  })
);

// Preflight request handling
app.options("*", cors());

app.use(express.json());

export const prismaClient = new PrismaClient({
  log: ["query"],
});

app.use("/api/v1/budgets", budgetRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/pots", potsRouter);
app.use("/api/v1/transactions", transactionRouter);

/* Catches any errors thrown from our routes */
app.use(errorMiddleware);

app.listen(config.port, () => {
  console.log("Server running and listening on port 3000");
});
