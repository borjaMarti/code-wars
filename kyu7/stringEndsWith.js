// 7 kyu
// String ends with?
// JavaScript :

// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

const solution = (str, ending) =>
  str.slice(str.length - ending.length) === ending;

// Alternatively, use the endsWith String method:

// const solution = (str, ending) => str.endsWith(ending);
