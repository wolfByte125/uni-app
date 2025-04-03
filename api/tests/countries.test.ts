import { describe, expect, test } from "vitest";
import { NewCountry } from "../src/db/types/country_types";
import { insertCountry } from "../src/countries";

const testCountry: NewCountry = {
  name: "Ethiopia",
  continent: "Africa",
  currency: "ETB",
};

describe("insertCountry", () => {
  test("both values not null", async () => {
    const start = new Date().valueOf();
    const res = await insertCountry(testCountry);
    expect(res[0].name).toBe(testCountry.name);
    expect(res[0].continent).toBe(testCountry.continent);
    expect(res[0].currency).toBe(testCountry.currency);
    expect(res[0].createdAt.valueOf()).gte(start);
    expect(res[0].updatedAt.valueOf()).gte(start);
  });
});
