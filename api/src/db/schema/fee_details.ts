import { decimal, pgTable, timestamp, uuid } from "drizzle-orm/pg-core";
import { labels } from "./labels";
import { applications } from "./applications";

export const fee_details = pgTable("fee_details", {
  id: uuid("id").primaryKey().defaultRandom(),
  feeId: uuid("fee_id")
    .notNull()
    .references(() => labels.id),
  amount: decimal("amount", { precision: 10, scale: 2 }).notNull(),
  applicationId: uuid("application_id")
    .notNull()
    .references(() => applications.id),
  // TODO extract to reusable service (if possible)
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});
