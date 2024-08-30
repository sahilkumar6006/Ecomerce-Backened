import { HttpException } from "./root";

export class BadRequestException extends HttpException {
  constructor(message: string) {
    super(message, , 400, { message });
  }
}
