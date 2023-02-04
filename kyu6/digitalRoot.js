// 6kyu
// Sum of Digits / Digital Root
// JavaScript:

// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

function digitalRoot(n) {
    n = String(n).split('').reduce( (a, b) => a + +b, 0);  
    return String(n).length === 1 ? n : digitalRoot(n);
}

// The O(1) solution:

// function digitalRoot(n) {
//     return (n - 1) % 9 + 1;
// }

// Instead of converting to string and checking length, it could be just n < 10. Recursive one-liner:

// function digitalRoot(n) {
//     return n < 10 ? n : digitalRoot(String(n).split('').reduce( (a, b) => a + +b, 0));
// }