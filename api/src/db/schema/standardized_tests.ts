import { decimal, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
// TODO add a json type for `sections` of the test (reading, writing, ...)
export const standardized_tests = pgTable("standardized_tests", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  totalPoints: decimal("total_points", { precision: 10, scale: 2 }).notNull(),
  // TODO extract to reusable service (if possible)
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});
