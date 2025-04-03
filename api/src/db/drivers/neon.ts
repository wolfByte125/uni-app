import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "../schema/index";
import { DATABASE_URL } from "../../config";

console.log("DATABASE_URL: ", DATABASE_URL!);

export function init() {
  // if (!DATABASE_URL) {
  //   throw new Error("DATABASE_URL is not set");
  // }
  return drizzle(
    neon(
      "postgresql://neondb_owner:I5cSfRQKb3ME@ep-rapid-glitter-a5k2taf9.us-east-2.aws.neon.tech/neondb?sslmode=require"
    ),
    { schema }
  );
}
