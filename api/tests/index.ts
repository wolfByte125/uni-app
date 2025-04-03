import { migrate } from "drizzle-orm/pglite/migrator";
import { init } from "../src/db/drivers/pglite";
async function main() {
  const drizzle = init();
  await migrate(drizzle, {
    migrationsFolder: `${__dirname}/../migrations`,
  });
}

main();
