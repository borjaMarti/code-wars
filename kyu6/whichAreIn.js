// 6 kyu
// Which are in?
// JavaScript:

// Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

// a1 = ["arp", "live", "strong"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns ["arp", "live", "strong"]

// a1 = ["tarp", "mice", "bull"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns []

function inArray(array1, array2) {
  const areIn = new Set();

  for (let string of array2) {
    array1.forEach((sub) => {
      if (string.includes(sub)) areIn.add(sub);
    });
  }

  return [...areIn].sort();
}

// Simpler solutions available:

// function inArray(arr1, arr2) {
//   return arr1
//     .filter((needle) => {
//       arr2.some((haystack) => haystack.indexOf(needle) > -1);
//     })
//     .sort();
// }

// function inArray(a1, a2) {
//   const str = a2.join(" ");
//   return a1.filter((s) => str.indexOf(s) !== -1).sort();
// }
