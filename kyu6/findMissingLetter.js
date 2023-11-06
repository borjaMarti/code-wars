// 6 kyu
// Find the missing letter
// JavaScript:

// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// ['a','b','c','d','f'] -> 'e'
// ['O','Q','R','S'] -> 'P'

// (Use the English alphabet with 26 letters!)

function findMissingLetter(array) {
  for (let i = 1; i <= array.length; i++) {
    if (array[i].charCodeAt(0) - array[i - 1].charCodeAt(0) !== 1) return String.fromCharCode(array[i].charCodeAt(0) - 1);
  }
  
  return "";
}