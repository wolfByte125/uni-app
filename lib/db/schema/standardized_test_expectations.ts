import { decimal, pgTable, timestamp, uuid } from "drizzle-orm/pg-core";
import { standardized_tests } from "./standardized_tests";
import { applications } from "./applications";

export const standardized_test_expectations = pgTable(
  "standardized_test_expectations",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    standardizedTestId: uuid("standardized_test_id")
      .notNull()
      .references(() => standardized_tests.id),
    applicationId: uuid("application_id")
      .notNull()
      .references(() => applications.id),
    expectedPoints: decimal("expected_points", {
      precision: 10,
      scale: 2,
    }).notNull(),
    // TODO extract to reusable service (if possible)
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at").notNull().defaultNow(),
  }
);
