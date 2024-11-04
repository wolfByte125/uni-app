import { NeonHttpDatabase } from "drizzle-orm/neon-http";
import { labels } from "../schema";

export async function seed_labels(db: NeonHttpDatabase) {
  const tuitionFee: typeof labels.$inferInsert = {
    name: "Tuition Fee",
    type: "Fee",
  };

  await db.insert(labels).values(tuitionFee);

  console.log("New label inserted");
}
