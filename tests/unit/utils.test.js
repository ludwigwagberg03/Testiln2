import { describe, it, expect } from "vitest";
import { removeNonealphanumericCharacters, isValidInput } from "../../js/utils.js";

describe("Utility functions", () => {

  it("ska ta bort icke alphanumeric characters", () => {
    expect(removeNonealphanumericCharacters("@pikachu123!+")).toBe("pikachu123");
  });

  it("ska returnera true för lowercase text", () => {
    expect(isValidInput("pikachu")).toBe(true);
  });

  it("ska returnera false för uppercase", () => {
    expect(isValidInput("Pikachu")).toBe(false);
  });

  it("ska returnera false för tom string", () => {
    expect(isValidInput("   ")).toBe(false);
  });
});