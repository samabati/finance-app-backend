import { HttpException } from "./root";

export class UnauthorizedException extends HttpException {
  constructor(message: string, errorCode: any) {
    super(message, errorCode, 403, null);
  }
}
