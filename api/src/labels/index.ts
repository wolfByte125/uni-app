// queries go here
import { NewLabel } from "../db/types/label_types";
import { labels } from "../db/schema";
import { init } from "../db/index";

const db = await init();

// for seed
export const insertLabels = async (data: NewLabel[]) => {
  return db.insert(labels).values(data).returning();
};

export const insertLabel = async (data: NewLabel) => {
  return db.insert(labels).values(data).returning();
};

export const fetchLabels = async () => {
  return db.select().from(labels);
};

// delete all labels
export const deleteLabels = async () => {
  return db.delete(labels);
};
