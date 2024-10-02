import { Request } from "express";

declare global {
  namespace Express {
    interface Request {
      user: User; // or specify the type of user if you have a User interface
    }
  }
}
