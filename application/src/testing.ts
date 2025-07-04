// Unit test

// Integration

// E2E test

type TCalculator = (
  a: number,
  b: number,
  operation?: "sum" | "difference"
) => number;
export const calculator: TCalculator = (a, b, operation) => {
  if (operation === "difference") return a - b;
  return a + b;
};

// calculator("hello", "world")
