import { ERROR_DEFINITIONS, ErrorCode } from "./error-codes"

export interface CreateErrorOptions {
  message?: string
  details?: unknown
  cause?: unknown
}

export class CreateError extends Error {
  readonly code: ErrorCode
  readonly status: number
  readonly details?: unknown

  constructor(code: ErrorCode, options: CreateErrorOptions = {}) {
    const def = ERROR_DEFINITIONS[code]
    super(options.message ?? def.message, { cause: options.cause })
    this.name = "CreateError"
    this.code = code
    this.status = def.status
    this.details = options.details
    Error.captureStackTrace?.(this, CreateError)
  }
}