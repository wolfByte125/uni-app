import { decimal, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { universities } from "./universities";
import { labels } from "./labels";
import { users } from "./users";

export const educational_backgrounds = pgTable("educational_backgrounds", {
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
  cgpa: decimal("cpga", { precision: 10, scale: 2 }),
  startDate: timestamp("start_date").notNull().defaultNow(),
  endDate: timestamp("end_date").defaultNow(),
  // TODO extract to reusable service (if possible)
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});
