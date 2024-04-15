// 4 kyu
// So Many Permutations!
// JavaScript:

// In this kata, your task is to create all permutations of a non-empty input string and remove duplicates, if present.

// Create as many "shufflings" as you can!

// With input 'a':
// Your function should return: ['a']

// With input 'ab':
// Your function should return ['ab', 'ba']

// With input 'abc':
// Your function should return ['abc','acb','bac','bca','cab','cba']

// With input 'aabb':
// Your function should return ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']

// Note: The order of the permutations doesn't matter.

// Good luck!

const permutations = (string, mutation = "", result = new Set()) => {
  if (string.length === 0) {
    result.add(mutation);
  } else {
    for (let i = 0; i < string.length; i++) {
      permutations(
        string.slice(0, i) + string.slice(i + 1),
        mutation + string[i],
        result
      );
    }
  }

  return [...result];
};
