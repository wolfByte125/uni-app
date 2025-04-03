import { PGlite } from "@electric-sql/pglite";
import { drizzle } from "drizzle-orm/pglite";
// import * as schema from "../schema/index.js";

export function init() {
  const client = new PGlite();
  return drizzle({ client });
}
