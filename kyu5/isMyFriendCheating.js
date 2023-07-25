// 5 kyu
// Is my friend cheating?
// JavaScript:

// A friend of mine takes the sequence of all numbers from 1 to n (where n > 0).
// Within that sequence, he chooses two numbers, a and b.
// He says that the product of a and b should be equal to the sum of all numbers
// in the sequence, excluding a and b.
// Given a number n, could you tell me the numbers he excluded from
// the sequence?

// The function takes the parameter: n (n is always strictly greater than 0) and
// returns an array of the form:

// [[a, b], ...]

// with all (a, b) which are the possible removed numbers in
// the sequence 1 to n.

// [[a, b], ...] will be sorted in increasing order of the "a".

// It happens that there are several possible (a, b). The function returns an
// empty array if no possible numbers are found which will prove that my friend
// has not told the truth!

// Example:

// removeNb(26) should return [[15, 21], [21, 15]]

function removeNb(n) {
  const sum = (n * (n + 1)) / 2;
  const ans = [];

  for (let a = Math.floor(n / 2); a < n; a++) {
    let b = (sum - a) % a;
    if (a * b === sum - a - b) {
      ans.push([a, b], [b, a]);
    }
  }

  return ans.sort((a, b) => {
    return a[0] - b[0];
  });
}

// Took some time but finally found the solution, after doing a first
// implementation with nested loops. Modulus was the answer.
