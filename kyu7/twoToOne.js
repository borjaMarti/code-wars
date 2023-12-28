// 7 kyu
// Two to One
// JavaScript:

// Take 2 strings s1 and s2 including only letters from a to z.Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

function longest(s1, s2) {
  let letterSet = new Set();
  let total = s1 + s2;
  let answer = [];

  for (let letter of total) {
    letterSet.add(letter);
  }

  for (let letter of letterSet.keys()) {
    answer.push(letter);
  }

  return answer.sort().join("");
}

// Possible early-stopping system once letterSet's size is that of the alphabet.

// Also, need to learn more about Set creation. Could be simpler:

// const longest = (s1, s2) => [...new Set(s1 + s2)].sort().join("");

// function longest(s1, s2) {
//   let letterSet = new Set();
//   let total = s1 + s2;

//   for (let letter of total) {
//     letterSet.add(letter);
//   }

//   return [...letterSet].sort().join("");
// }
