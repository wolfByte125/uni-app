import {
  boolean,
  decimal,
  pgTable,
  text,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";
import { universities } from "./universities";
import { external_scholarship_providers } from "./external_scholarship_providers";

export const scholarships = pgTable("scholarships", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  type: text("type").notNull(),
  universityId: uuid("university_id").references(() => universities.id),
  externalScholarshipProviderId: uuid(
    "external_scholarship_provider_id"
  ).references(() => external_scholarship_providers.id),
  coversTuition: boolean("covers_tuition"),
  coversAccomodation: boolean("covers_accomodation"),
  coversTravel: boolean("covers_travel"),
  providesStipend: boolean("covers_stipend"),
  fundLimit: decimal("fund_limit", { precision: 10, scale: 2 }),
  // TODO extract to reusable service (if possible)
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});
