// writing an assertion library
/*
Now let's implement our own assertion library.
Create a function called `expect` that accepts an "actual"
and returns an object of assertions.
Goal: I want to be able to use it like so:
> expect(actual).toBe(expected)

Helpers: ✓ ✕
 */

import { sum, subtract } from "./math.js";

let result, expected;

result = sum(3, 7);
expected = 10;
if (result !== expected) {
  throw new Error(`${result} is not equal to ${expected}`);
}

result = subtract(7, 3);
expected = 4;
if (result !== expected) {
  throw new Error(`${result} is not equal to ${expected}`);
}
