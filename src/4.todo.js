// writing a testing framework
/*
Let's improve a step further. Create more readable 
messages. And color code the messages

Use: chalk.js

Helpers: ✓ ✕s
 */

import { sum, subtract } from "./math.js";
import chalk from "chalk";

const errorLog = chalk.bold.redBright;
const errorDescLog = chalk.red.italic;
const successLog = chalk.bold.green;

let result, expected;

result = subtract(7, 3);
expected = 4;
expect(result).toBe(expected);

test("Sum adds number", () => {
  const result = sum(3, 7);
  const expected = 10;
  expect(result).toBe(expected);
});

test("subtract subtracts number", () => {
  const result = subtract(7, 3);
  const expected = 4;
  expect(result).toBe(expected);
});

function test(title, callback) {
  try {
    callback();
    console.log(successLog(`✓ ${title}`));
  } catch (error) {
    console.error(errorLog(`✕ ${title}`));
    console.error(errorDescLog(error));
  }
}

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`);
      }
    },
  };
}
