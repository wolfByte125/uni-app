import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { countries } from "./countries";

export const universities = pgTable("universities", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  city: text("city").notNull(),
  countryId: uuid("country_id").references(() => countries.id),
  // TODO extract to reusable service (if possible)
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});
