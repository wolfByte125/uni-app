import { insertCountries } from "../../countries";
import { NewCountry } from "../types/country_types";

export async function seed_countries() {
  const country1: NewCountry = {
    name: "Ethiopia",
    continent: "Africa",
    currency: "ETB",
  };

  const country2: NewCountry = {
    name: "Britain",
    continent: "Europe",
    currency: "GBP",
  };

  const country3: NewCountry = {
    name: "USA",
    continent: "North America",
    currency: "USD",
  };

  const country4: NewCountry = {
    name: "Sweden",
    continent: "Europe",
    currency: "SEK",
  };

  await insertCountries([country1, country2, country3, country4]);

  console.log("Countries Seeded.");
}
