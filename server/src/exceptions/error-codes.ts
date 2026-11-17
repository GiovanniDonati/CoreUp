export enum ErrorCode {
  BAD_REQUEST = "BAD_REQUEST",
  UNAUTHORIZED = "UNAUTHORIZED",
  FORBIDDEN = "FORBIDDEN",
  NOT_FOUND = "NOT_FOUND",
  CONFLICT = "CONFLICT",
  PAYLOAD_TOO_LARGE = "PAYLOAD_TOO_LARGE",
  VALIDATION_FAILED = "VALIDATION_FAILED",
  TOO_MANY_REQUESTS = "TOO_MANY_REQUESTS",
  INTERNAL_ERROR = "INTERNAL_ERROR",
  SERVICE_UNAVAILABLE = "SERVICE_UNAVAILABLE",
}

export interface ErrorDefinition {
  status: number
  message: string
}

export const ERROR_DEFINITIONS = {
  [ErrorCode.BAD_REQUEST]: { status: 400, message: "Requisição inválida" },
  [ErrorCode.UNAUTHORIZED]: { status: 401, message: "Não autenticado" },
  [ErrorCode.FORBIDDEN]: { status: 403, message: "Sem permissão" },
  [ErrorCode.NOT_FOUND]: { status: 404, message: "Recurso não encontrado" },
  [ErrorCode.CONFLICT]: { status: 409, message: "Conflito com o estado atual do recurso" },
  [ErrorCode.PAYLOAD_TOO_LARGE]: { status: 413, message: "Corpo da requisição grande demais" },
  [ErrorCode.VALIDATION_FAILED]: { status: 422, message: "Dados inválidos" },
  [ErrorCode.TOO_MANY_REQUESTS]: { status: 429, message: "Muitas requisições" },
  [ErrorCode.INTERNAL_ERROR]: { status: 500, message: "Erro interno do servidor" },
  [ErrorCode.SERVICE_UNAVAILABLE]: { status: 503, message: "Serviço indisponível" },
} as const satisfies Record<ErrorCode, ErrorDefinition>