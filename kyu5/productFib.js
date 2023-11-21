// 5 kyu
// Product of consecutive Fib numbers
// JavaScript:

// The Fibonacci numbers are the numbers in the following integer sequence (Fn):

//     0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...

// such as

//     F(n) = F(n-1) + F(n-2) with F(0) = 0 and F(1) = 1.

// Given a number, say prod (for product), we search two Fibonacci numbers F(n) and F(n+1) verifying

//     F(n) * F(n+1) = prod.

// Your function productFib takes an integer (prod) and returns an array:

// [F(n), F(n+1), true] if F(n) * F(n+1) = prod.

// If you don't find two consecutive F(n) verifying F(n) * F(n+1) = prod you will return:

// [F(n), F(n+1), false]

// F(n) being the smallest one such as F(n) * F(n+1) > prod.

// productFib(714) // should return [21, 34, true],
//                 // since F(8) = 21, F(9) = 34 and 714 = 21 * 34

// productFib(800) // should return (34, 55, false],
//                 // since F(8) = 21, F(9) = 34, F(10) = 55 and 21 * 34 < 800 < 34 * 55
// -----
// productFib(714) // should return [21, 34, true],
// productFib(800) // should return [34, 55, false],
// -----
// productFib(714) // should return [21, 34, 1],
// productFib(800) // should return [34, 55, 0],
// -----
// productFib(714) // should return [21, 34, true],
// productFib(800) // should return [34, 55, false],

function productFib(prod) {
  let x = 0;
  let y = 1;

  while (x * y < prod) {
    [x, y] = [y, x + y];
  }

  return x * y === prod ? [x, y, true] : [x, y, false];
}

// A more condensed version:

// function productFib(prod) {
//   let [x, y] = [0, 1];

//   while (x * y < prod) {
//     [x, y] = [y, x + y];
//   }

//   return [x, y, x * y === prod];
// }
