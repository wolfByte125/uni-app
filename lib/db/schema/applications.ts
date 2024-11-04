import { integer, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { universities } from "./universities";
import { labels } from "./labels";
import { users } from "./users";

export const applications = pgTable("applications", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("user_id")
    .notNull()
    .references(() => users.id),
  universityId: uuid("university_id")
    .notNull()
    .references(() => universities.id),
  programLevelId: uuid("program_level_id").references(() => labels.id),
  fieldOfStudyId: uuid("field_of_study_id").references(() => labels.id),
  programme: text("programme").notNull(),
  // rating 1 - 10 : 10 being very confident
  confidenceLevelOfAcceptance: integer(
    "confidence_level_of_acceptance"
  ).notNull(),
  // rating 1 - 5 : 1 being highest priority
  priority: integer("priority").notNull(),
  deadline: timestamp("deadline").notNull().defaultNow(),
  // TODO extract to reusable service (if possible)
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});
