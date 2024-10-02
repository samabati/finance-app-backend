import { HttpException } from "./root";

export class InternalException extends HttpException {
  constructor(message: string, errorcode: any, error: any) {
    super(message, errorcode, 500, error);
  }
}
