// 7 kyu
// Shortest Word
// JavaScript:

// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s) {
  let short = Infinity;

  s.split(" ").forEach((w) => {
    short = Math.min(short, w.length);
  });

  return short;
}

// Another interesting implementation:

// function findShort(s) {
//   return Math.min(...s.split(" ").map((s) => s.length));
// }
