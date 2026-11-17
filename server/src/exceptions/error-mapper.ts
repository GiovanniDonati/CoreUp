import { ZodError } from "zod"
import { CreateError } from "./create-error"
import { ErrorCode } from "./error-codes"

const hasProp = <K extends string>(v: unknown, key: K): v is Record<K, unknown> =>
  typeof v === "object" && v !== null && key in v

export function toCreateError(err: unknown): CreateError {
  if (err instanceof CreateError) return err

  //Zod
  if (err instanceof ZodError) {
    return new CreateError(ErrorCode.VALIDATION_FAILED, {
      cause: err,
      details: err.issues.map((i) => ({ field: i.path.join("."), message: i.message })),
    })
  }

  // body-parser (express.json)
  if (hasProp(err, "type")) {
    if (err.type === "entity.parse.failed") {
      return new CreateError(ErrorCode.BAD_REQUEST, { message: "JSON inválido", cause: err })
    }
    if (err.type === "entity.too.large") {
      return new CreateError(ErrorCode.PAYLOAD_TOO_LARGE, { cause: err })
    }
  }

  if (err instanceof Error) {
    // Prisma
    if (err.name === "PrismaClientKnownRequestError" && hasProp(err, "code")) {
      if (err.code === "P2002") return new CreateError(ErrorCode.CONFLICT, { message: "Registro já existe", cause: err })
      if (err.code === "P2025") return new CreateError(ErrorCode.NOT_FOUND, { cause: err })
    }
  }

  // Bug ou falha inesperada
  return new CreateError(ErrorCode.INTERNAL_ERROR, { cause: err })
}