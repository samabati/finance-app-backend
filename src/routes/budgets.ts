import { Router } from "express";
import {
  getBudgets,
  createBudgets,
  updateBudgets,
  deleteBudgets,
} from "../controllers/budgets";
import { errorHandler } from "../errorhandler";
import { authMiddleware } from "../middlewares/auth";

const budgetRouter: Router = Router();

budgetRouter.get("/", [authMiddleware], errorHandler(getBudgets));
budgetRouter.post("/", [authMiddleware], errorHandler(createBudgets));
budgetRouter.patch("/:id", [authMiddleware], errorHandler(updateBudgets));
budgetRouter.delete("/:id", [authMiddleware], errorHandler(deleteBudgets));

export default budgetRouter;
