import { Router } from "express";
import {
  createPot,
  updatePot,
  deletePot,
  getPots,
  addFunds,
  withdrawFunds,
} from "../controllers/pots";
import { authMiddleware } from "../middlewares/auth";
import { errorHandler } from "../errorhandler";

const potsRouter = Router();

potsRouter.get("/", [authMiddleware], errorHandler(getPots));
potsRouter.post("/", [authMiddleware], errorHandler(createPot));
potsRouter.patch("/:id/add", [authMiddleware], errorHandler(addFunds));
potsRouter.patch(
  "/:id/withdraw",
  [authMiddleware],
  errorHandler(withdrawFunds)
);
potsRouter.patch("/:id", [authMiddleware], errorHandler(updatePot));
potsRouter.delete("/:id", [authMiddleware], errorHandler(deletePot));

export default potsRouter;
