import { RequestHandler } from "express"
import { CreateError, ErrorCode } from "../exceptions"

export const notFound: RequestHandler = (req, _res, next) => {
  next(new CreateError(ErrorCode.NOT_FOUND, { message: `Rota ${req.method} ${req.path} não encontrada` }))
}