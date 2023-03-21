// 7 kyu
// Exes and Ohs
// JavaScript:

// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
    let count = 0;
    for (const char of str) {
      if (char.toLowerCase() === 'x') count++;
      if (char.toLowerCase() === 'o') count--;
    }
  
    return count === 0;
}

// Clever one-liner:

// function XO(str) {
//     return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
// }