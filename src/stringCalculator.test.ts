import { describe, it, expect } from "vitest";
import { add } from "../src/stringCalculator";

describe("String Calculator", () => {
    // Basic cases
    it("should return 0 for an empty string", () => {
        expect(add("")).toBe(0);
    });

    it("should return the number itself for a single number", () => {
        expect(add("5")).toBe(5);
    });

    it("should sum two comma-separated numbers", () => {
        expect(add("1,2")).toBe(3);
    });

    it("should sum multiple comma-separated numbers", () => {
        expect(add("1,2,3,4")).toBe(10);
    });

    // Newline support
    it("should support newlines as delimiters", () => {
        expect(add("1\n2,3")).toBe(6);
    });

    it("should handle multiple newlines and commas mixed", () => {
        expect(add("1\n2\n3,4")).toBe(10);
    });

    // Input validation
    it("should throw an error if input contains invalid numbers", () => {
        expect(() => add("1,abc")).toThrow("Invalid number detected.");
    });

    // Negative numbers
    it("should throw an error for negative numbers", () => {
        expect(() => add("1,-2,3,-4")).toThrow("Negatives not allowed: -2, -4");
    });

    //  Edge cases
    it("should ignore extra commas or newlines at the end", () => {
        expect(add("1,2,3,\n")).toBe(6);
    });

    it("should handle large numbers too (since we removed >1000 filter)", () => {
        expect(add("1000,2000")).toBe(3000);
    });
});
