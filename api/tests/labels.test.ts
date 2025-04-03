import { describe, expect, test } from "vitest";
import { NewLabel } from "../src/db/types/label_types";
import { deleteLabels, insertLabel } from "../src/labels/index";

const testLabel1: NewLabel = {
  name: "Test Label 1",
  type: "Test",
};

describe("insertLabel", () => {
  test("both values not null", async () => {
    const start = new Date().valueOf();
    const res = await insertLabel(testLabel1);
    expect(res[0].name).toBe(testLabel1.name);
    expect(res[0].type).toBe(testLabel1.type);
    expect(res[0].createdAt.valueOf()).gte(start);
    expect(res[0].updatedAt.valueOf()).gte(start);
    await deleteLabels();
  });
});
