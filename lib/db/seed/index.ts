import { drizzle } from "drizzle-orm/neon-http";
import { seed_labels } from "./labels";

const db = drizzle(process.env.DATABASE_URL!);

async function main() {
  seed_labels(db);
}

main();
