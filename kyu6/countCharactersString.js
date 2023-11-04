// 6 kyu
// Count characters in your string
// JavaScript:

// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

function count(string) {
  const counted = {};

  for (let c of string) {
    counted[c] ? (counted[c] += 1) : (counted[c] = 1);
  }

  return counted;
}

// Most clever solution ><

// const count = require("lodash").countBy;
