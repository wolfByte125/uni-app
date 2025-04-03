import "dotenv/config";
import { defineConfig } from "drizzle-kit";
export default defineConfig({
  out: "./api/migrations",
  schema: "./api/src/db/schema/*",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
