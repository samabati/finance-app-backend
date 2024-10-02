export class HttpException extends Error {
  message: string;
  errorCode: any;
  statusCode: number;
  errors: any;
  constructor(
    message: string,
    errorCode: any,
    statusCode: number,
    errors: any
  ) {
    super();
    this.message = message;
    this.errorCode = errorCode;
    this.statusCode = statusCode;
    this.errors = errors;
  }
}

export enum ErrorCodes {
  USER_ALREADY_EXISTS = 10001,
  USER_DOES_NOT_EXIST = 10002,
  INCORRECT_PASSWORD = 10003,
  UNPROCESSABLE_ENTITY = 10004,
  INTERNAL_ERROR = 10005,
  UNAUTHORIZED_REQUEST = 10006,
}
