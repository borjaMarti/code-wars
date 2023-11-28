// 5 kyu
// Integers: Recreation One
// JavaScript:

// 1, 246, 2, 123, 3, 82, 6, 41 are the divisors of number 246. Squaring these divisors we get: 1, 60516, 4, 15129, 9, 6724, 36, 1681. The sum of these squares is 84100 which is 290 * 290.

// Find all integers between m and n (m and n integers with 1 <= m <= n) such that the sum of their squared divisors is itself a square.

// We will return an array of subarrays. The subarrays will have two elements: first the number the squared divisors of which is a square and then the sum of the squared divisors.

// list_squared(1, 250) --> [[1, 1], [42, 2500], [246, 84100]]
// list_squared(42, 250) --> [[42, 2500], [246, 84100]]

function listSquared(m, n) {
  const result = [];

  for (let i = m; i <= n; i++) {
    let divisors = 0;

    for (let j = 1; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        divisors += j ** 2;
        if (Math.sqrt(i) !== j) {
          divisors += (i / j) ** 2;
        }
      }
    }

    if (Number.isInteger(Math.sqrt(divisors))) {
      result.push([i, divisors]);
    }
  }

  return result;
}
