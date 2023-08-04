import winston from "winston";

const Log = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: "logs/error.log", level: "error" }),
    new winston.transports.File({ filename: "logs/app.log" }),
  ],
});

if (process.env.NODE_ENV !== "production") {
  Log.add(
    new winston.transports.Console({
      format: winston.format.simple(),
    })
  );
}

export default Log;
