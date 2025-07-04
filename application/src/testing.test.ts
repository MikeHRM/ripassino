import { calculator } from "./testing";
import { it, expect, describe } from "vitest";

describe("testing.ts", () => {
  it("should return 3, if 1 and 2 are passed", () => {
    // A.A.A.

    // Arrange - let's prepare the test
    const result = calculator(1, 2); // return 3

    // Act (most of the time is optional) - let's simulate how the user would interact with the code

    // Assert - verify our hypotesis
    expect(result).toBe(3);
  });

  it("should return 3, if 1 and 2 are passed together with the 'sum' param", () => {
    // A.A.A.

    // Arrange - let's prepare the test
    const result = calculator(1, 2, "sum"); // return 3

    // Act (most of the time is optional) - let's simulate how the user would interact with the code

    // Assert - verify our hypotesis
    expect(result).toBe(3);
  });

  it("should return 2, if 7 and 5 are passed together with the 'difference' param", () => {
    // A.A.A.

    // Arrange - let's prepare the test
    const result = calculator(7, 5, "difference"); // return 2

    // Act (most of the time is optional) - let's simulate how the user would interact with the code

    // Assert - verify our hypotesis
    expect(result).toBe(2);
  });
});
