import { expect, describe, it } from "vitest";
import { isArray } from "../src/flags";

describe("Flags Test Here", () => {
    it("function should return true", () => {
        const mockArray = [1, 2, 3, 4];
        expect(isArray(mockArray)).toEqual(true);
    });
    it("not a valid array", () => {
        const invalidData = "mmd";
        expect(isArray(invalidData)).toBe(false);
    });
});
