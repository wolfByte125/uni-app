import { countries } from "../schema";

export type NewCountry = typeof countries.$inferInsert;
