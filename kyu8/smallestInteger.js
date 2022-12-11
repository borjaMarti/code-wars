// 8 kyu
// Find the smallest integer in the array
// JavaScript:

// Given an array of integers your solution should find the smallest integer.

// For example:

//     Given [34, 15, 88, 2] your solution will return 2
//     Given [34, -345, -1, 100] your solution will return -345

// You can assume, for the purpose of this kata, that the supplied array will not be empty.

class SmallestIntegerFinder {
    findSmallestInt(args) {
      let compare = Infinity;
      args.forEach ( element => {
        if (element < compare) {
            compare = element;
        }
      });
      return compare;
    }
  }

// Short answer:

// class SmallestIntegerFinder {
//     findSmallestInt(args) {
//       return Math.min(...args)
//     }
//   }