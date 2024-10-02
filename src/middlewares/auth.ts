import { Request, Response, NextFunction } from "express";
import { UnauthorizedException } from "../exceptions/unauthorized";
import { ErrorCodes } from "../exceptions/root";
import jwt from "jsonwebtoken";
import { env } from "process";
import { prismaClient } from "..";

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let token = req.headers.authorization;
  try {
    if (!token)
      throw new UnauthorizedException(
        "Unauthorized Request",
        ErrorCodes.UNAUTHORIZED_REQUEST
      );

    token = token.split(" ")[1];
    console.log(token);
    const payload = jwt.verify(token, env.JWT_SECRET as any);

    const user = await prismaClient.user.findFirst({
      where: { id: +payload },
    });

    if (!user)
      throw new UnauthorizedException(
        "Unauthorized Request",
        ErrorCodes.UNAUTHORIZED_REQUEST
      );

    req.user = user;

    next();
  } catch (err) {
    next(
      new UnauthorizedException(
        "Unauthorized Request",
        ErrorCodes.UNAUTHORIZED_REQUEST
      )
    );
  }
};
