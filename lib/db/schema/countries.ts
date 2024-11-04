import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const countries = pgTable("countries", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  continent: text("continent").notNull(),
  currency: text("currency").notNull(),
  // TODO extract to reusable service (if possible)
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});
