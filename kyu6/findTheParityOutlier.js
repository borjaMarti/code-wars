// 6 kyu
// Find The Parity Outlier
// JavaScript:

// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

// [2, 4, 0, 100, 4, 11, 2602, 36] -->  11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21] --> 160 (the only even number)

function findOutlier(integers) {
  let odds = 0;
  let evens = 0;
  let lastOdd = null;
  let lastEven = null;

  for (let i of integers) {
    if (i % 2 === 0) {
      lastEven = i;
      evens++;
    } else {
      lastOdd = i;
      odds++;
    }

    if (evens > 1 && odds === 1) {
      return lastOdd;
    } else if (odds > 1 && evens === 1) {
      return lastEven;
    }
  }
}

// Alternative that requires completing two iterations over the original array:

// function findOutlier(integers) {
//   let evens = integers.filter((num) => num % 2 === 0);
//   let odds = integers.filter((num) => num % 2 !== 0);

//   return evens.length === 1 ? evens[0] : odds[0];
// }
