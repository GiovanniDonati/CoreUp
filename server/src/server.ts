import dotenv from 'dotenv';
import { app } from "./app"
import { logger } from "./lib/logger"

dotenv.config();

const port = Number(process.env.PORT ?? 8001)
const server = app.listen(port, () => logger.info(` server on http://localhost:${port}`))

function shutdown(reason: string, exitCode: number) {
  logger.fatal({ reason }, "Encerrando processo")
  server.close(() => process.exit(exitCode))
  setTimeout(() => process.exit(exitCode), 10_000).unref()
}

process.on("unhandledRejection", (reason) => {
  logger.fatal({ err: reason }, "unhandledRejection")
  shutdown("unhandledRejection", 1)
})
process.on("uncaughtException", (err) => {
  logger.fatal({ err }, "uncaughtException")
  shutdown("uncaughtException", 1)
})

process.on("SIGTERM", () => shutdown("SIGTERM", 0))
process.on("SIGINT", () => shutdown("SIGINT", 0))