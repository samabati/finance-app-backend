import { Request, Response, NextFunction } from "express";
import { ErrorCodes, HttpException } from "./exceptions/root";
import { InternalException } from "./exceptions/internal";
import { ZodError } from "zod";
import { UnprocessableEntity } from "./exceptions/unprocessable";

export const errorHandler = (method: Function) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await method(req, res, next);
    } catch (err) {
      let exception;
      if (err instanceof HttpException) {
        exception = err;
      } else if (err instanceof ZodError) {
        exception = new UnprocessableEntity(
          "Unprocessable Entity",
          ErrorCodes.UNPROCESSABLE_ENTITY,
          err.issues
        );
      } else {
        exception = new InternalException(
          "An internal error has occurred",
          ErrorCodes.INTERNAL_ERROR,
          err
        );
      }
      next(exception);
    }
  };
};
