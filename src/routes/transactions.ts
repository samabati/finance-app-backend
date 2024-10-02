import { Router } from "express";
import { authMiddleware } from "../middlewares/auth";
import { errorHandler } from "../errorhandler";
import {
  getTransactions,
  createBatchTransactions,
} from "../controllers/transactions";

const transactionRouter = Router();

transactionRouter.get("/", [authMiddleware], errorHandler(getTransactions));
transactionRouter.post(
  "/batch",
  [authMiddleware],
  errorHandler(createBatchTransactions)
);

export default transactionRouter;
