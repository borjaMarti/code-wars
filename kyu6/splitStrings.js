// 6 kyu
// Split Strings
// JavaScript:

// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

function solution(str) {
  const solution = [];
  if (str.length % 2 !== 0) str += "_";
  for (let i = 0; i < str.length; i += 2) {
    solution.push(str.slice(i, i + 2));
  }
  return solution;
}
