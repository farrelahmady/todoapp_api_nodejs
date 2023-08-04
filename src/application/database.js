import { PrismaClient } from "@prisma/client";
import Log from "./log";

const Prisma = new PrismaClient({
  log: [
    {
      emit: "event",
      level: "query",
    },
    {
      emit: "event",
      level: "info",
    },
    {
      emit: "event",
      level: "warn",
    },
    {
      emit: "event",
      level: "error",
    },
  ],
});

Prisma.$on("query", (e) => {
  Log.info(`Query: ${e.query}`);
});

Prisma.$on("info", (e) => {
  Log.info(`Info: ${e.message}`);
});

Prisma.$on("warn", (e) => {
  Log.warn(`Warn: ${e.message}`);
});

Prisma.$on("error", (e) => {
  Log.error(`Error: ${e.message}`);
});

export default Prisma;
