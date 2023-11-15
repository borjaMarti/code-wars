// 6 kyu
// Give me a Diamond
// JavaScript:

// Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. Since James doesn't know how to make this happen, he needs your help.
// Task

// You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

// Return null if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.

// A size 3 diamond:

//  *
// ***
//  *

// ...which would appear as a string of " *\n***\n *\n"

// A size 5 diamond:

//   *
//  ***
// *****
//  ***
//   *

// ...that is:

// "  *\n ***\n*****\n ***\n  *\n"

function diamond(n) {
  if (n < 0 || n % 2 === 0) return null;

  let diamond = "";

  for (let i = 1; i < n; i += 2) {
    diamond += " ".repeat((n - i) / 2) + "*".repeat(i) + "\n";
  }

  for (let i = n; i > 0; i -= 2) {
    diamond += " ".repeat((n - i) / 2) + "*".repeat(i) + "\n";
  }

  return diamond;
}

// Single loop solution:

// function diamond(n) {
//   if (n < 0 || n % 2 === 0) return null;

//   let diamond = "";

//   for (let i = 0; i < n; i++) {
//     let len = Math.abs((n - 2 * i - 1) / 2);
//     diamond += " ".repeat(len) + "*".repeat(n - 2 * len) + "\n";
//   }

//   return diamond;
// }
