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

const app: Express = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:4200",
  })
);

export const prismaClient = new PrismaClient({
  log: ["query"],
});

app.use("/api/v1/budgets", budgetRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/pots", potsRouter);
app.use("/api/v1/transactions", transactionRouter);

/* Catches any errors thrown from our routes */
app.use(errorMiddleware);

app.listen(env.PORT, () => {
  console.log("Server running and listening on port 3000");
});
