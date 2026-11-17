import dotenv from 'dotenv'

import { STATUS_CODES } from "node:http"
import { ErrorRequestHandler } from "express"
import { ERROR_DEFINITIONS, ErrorCode, toCreateError } from "../exceptions"
import { logger } from "../lib/logger"

dotenv.config();

const isProd = process.env.NODE_ENV === "production"

export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  if (res.headersSent) return next(err)

  const error = toCreateError(err)
  const requestId: string | undefined = res.locals.requestId

  const logCtx = { err, requestId, method: req.method, url: req.originalUrl, code: error.code }
  if (error.status >= 500) logger.error(logCtx, "Erro interno")
  else logger.warn(logCtx, error.message)

  const isServerError = error.status >= 500
  const detail = isServerError ? ERROR_DEFINITIONS[ErrorCode.INTERNAL_ERROR].message : error.message
  const details = isServerError ? undefined : error.details

  res
    .status(error.status)
    .type("application/problem+json")
    .json({
      type: "about:blank",
      title: STATUS_CODES[error.status] ?? "Error",
      status: error.status,
      detail,
      code: error.code,
      instance: req.originalUrl,
      requestId,
      ...(details !== undefined && { errors: details }),
      ...(!isProd && { stack: error.stack }),
    })
}