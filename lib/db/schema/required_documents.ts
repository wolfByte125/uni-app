import { integer, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { labels } from "./labels";
import { applications } from "./applications";
import { scholarships } from "./scholarships";

export const required_documents = pgTable("required_documents", {
  id: uuid("id").primaryKey().defaultRandom(),
  documentId: uuid("document_id")
    .notNull()
    .references(() => labels.id),
  amount: integer("amount").notNull(),
  submittedBy: text("submitted_by").notNull(),
  submissionMechanism: text("submission_mechanism").notNull(),
  applicationId: uuid("application_id")
    .notNull()
    .references(() => applications.id),
  scholarshipId: uuid("scholarship_id")
    .notNull()
    .references(() => scholarships.id),
  // TODO extract to reusable service (if possible)
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});
