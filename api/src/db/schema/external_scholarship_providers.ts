import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const external_scholarship_providers = pgTable(
  "external_scholarship_providres",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    name: text("name").notNull(),
    // TODO extract to reusable service (if possible)
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at").notNull().defaultNow(),
  }
);
