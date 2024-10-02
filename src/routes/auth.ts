import { Router } from "express";
import { login, signUp, me } from "../controllers/auth";
import { errorHandler } from "../errorhandler";
import { authMiddleware } from "../middlewares/auth";

const authRouter = Router();

authRouter.post("/login", errorHandler(login));
authRouter.post("/signup", errorHandler(signUp));
authRouter.get("/me", [authMiddleware], errorHandler(me));

export default authRouter;
