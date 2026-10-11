
import { divide } from "../src/calculator.js";

// Positive test
test("Divides two numbers correctly", () => {
  expect(divide(10, 2)).toBe(5);
});

// Negative test 1
test("First argument is a string", () => {
  expect(() => divide("10", 2)).toThrow(TypeError);
});

// Negative test 2
test("Second argument is a string", () => {
  expect(() => divide(10, "2")).toThrow(TypeError);
});

// Negative test 3
test("Argument is NaN", () => {
  expect(() => divide(NaN, 2)).toThrow(TypeError);
});

// Negative test 4
test("Division by zero", () => {
  expect(() => divide(10, 0)).toThrow(RangeError);
});
