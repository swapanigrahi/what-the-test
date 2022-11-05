// the most fundamental test

/*
write a test that reveals the bug.
Write code that throws an error with a helpful message about the bug,
but only if there's a bug.
So... if (calling sum with some numbers doesn't return the right thing) {
  then throw an error with a helpful message
}
*/

// sum is intentionally broken so you can see errors in the tests
const sum = (a, b) => a - b;
const subtract = (a, b) => a - b;
