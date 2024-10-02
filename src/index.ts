import express, { Express, Request, Response } from "express";
import budgetRouter from "./routes/budgets";
import { env } from "process";
import { PrismaClient } from "@prisma/client";
import authRouter from "./routes/auth";
import { errorMiddleware } from "./middlewares/error";

const app: Express = express();

app.use(express.json());

export const prismaClient = new PrismaClient({
  log: ["query"],
});

app.use("/api/v1/budgets", budgetRouter);
app.use("/api/v1/auth", authRouter);

/* Catches any errors thrown from our routes */
app.use(errorMiddleware);

app.listen(env.PORT, () => {
  console.log("Server running and listening on port 3000");
});
