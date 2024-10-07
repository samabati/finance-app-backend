import { Router } from "express";
import { authMiddleware } from "../middlewares/auth";
import { errorHandler } from "../errorhandler";
import {
  getTransactions,
  createBatchTransactions,
  getRecurring,
} from "../controllers/transactions";

const transactionRouter = Router();

transactionRouter.get("/", errorHandler(getTransactions));
transactionRouter.post(
  "/batch",
  [authMiddleware],
  errorHandler(createBatchTransactions)
);
transactionRouter.get("/recurring", errorHandler(getRecurring));

export default transactionRouter;
