import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
// collectively for all entities with just a name column
export const labels = pgTable("labels", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  type: text("type").notNull(),
  // TODO extract to reusable service (if possible)
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});
