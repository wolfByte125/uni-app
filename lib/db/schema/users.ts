import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { countries } from "./countries";

export const users = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom(), // FIXME use uuid7 default
  firstName: text("first_name").notNull(),
  middleName: text("middle_name"),
  lastName: text("last_name").notNull(),
  email: text("email").notNull().unique(),
  residenceCountry: uuid("residence_country").references(() => countries.id),
  // TODO extract to reusable service (if possible)
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});
