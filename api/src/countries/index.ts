import { init } from "../db/index";
import { countries } from "../db/schema";
import { NewCountry } from "../db/types/country_types";

const db = await init();

export const insertCountries = async (data: NewCountry[]) => {
  return db.insert(countries).values(data).returning();
};

export const insertCountry = async (data: NewCountry) => {
  return db.insert(countries).values(data).returning();
};

export const fetchCountries = async () => {
  return db.select().from(countries);
};
