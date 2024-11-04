import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "../schema/index.js";
import { DATABASE_URL } from "../config.js";

export function init() {
  if (!DATABASE_URL) {
    throw new Error("DATABASE_URL is not set");
  }
  return drizzle(neon(DATABASE_URL), { schema });
}
