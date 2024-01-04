const { createLogger, format, transports, level } = require("winston");
const { combine, timestamp, label, prettyPrint } = format;

const logger = createLogger({
  format: combine(format.colorize(), timestamp()),
  defaultMeta: { service: "user-service" },

  transports: [new transports.Console()],
});

logger.log({
  level: "info",
  message: "What time is the testing at?",
});

