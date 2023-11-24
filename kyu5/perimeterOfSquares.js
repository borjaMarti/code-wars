// 5 kyu
// Perimeter of squares in a rectangle
// JavaScript:

// The drawing shows 6 squares the sides of which have a length of 1, 1, 2, 3, 5, 8. It's easy to see that the sum of the perimeters of these squares is : 4 * (1 + 1 + 2 + 3 + 5 + 8) = 4 * 20 = 80

// Could you give the sum of the perimeters of all the squares in a rectangle when there are n + 1 squares in the same manner as in the drawing:

// (Squares disposed in Fibonacci sequence, starting with two side length 1 squares, up to side length 8)

// The function perimeter has for parameter n where n + 1 is the number of squares (they are numbered from 0 to n) and returns the total perimeter of all the squares.

// perimeter(5)  should return 80
// perimeter(7)  should return 216

function perimeter(n) {
  let prev = 1;
  let next = 1;
  let total = 0;

  for (let i = 0; i < n + 1; i++) {
    total += prev;
    [prev, next] = [next, prev + next];
  }

  return total * 4;
}

// Alternative solution I liked, using Binet's Fibonacci number formula:

// const perimeter = (n) =>
//   4 * Math.round(((1 + 5 ** 0.5) / 2) ** (n + 3) / 5 ** 0.5 - 1);
