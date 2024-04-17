// 5 kyu
// Josephus Survivor
// JavaScript:

// In this kata you have to correctly return who is the "survivor", ie: the last element of a Josephus permutation.

// Basically you have to assume that n people are put into a circle and that they are eliminated in steps of k elements, like this:

// n=7, k=3 => means 7 people in a circle
// one every 3 is eliminated until one remains
// [1,2,3,4,5,6,7] - initial sequence
// [1,2,4,5,6,7] => 3 is counted out
// [1,2,4,5,7] => 6 is counted out
// [1,4,5,7] => 2 is counted out
// [1,4,5] => 7 is counted out
// [1,4] => 5 is counted out
// [4] => 1 counted out, 4 is the last element - the survivor!

// The above link about the "base" kata description will give you a more thorough insight about the origin of this kind of permutation, but basically that's all that there is to know to solve this kata.

function josephusSurvivor(people, k) {
  let n = 1;
  const items = Array(people)
    .fill("x")
    .map((_) => n++);
  const result = [];
  let index = 0;
  while (items.length > 0) {
    index = (index + k - 1) % items.length;
    result.push(...items.splice(index, 1));
  }
  return result[result.length - 1];
}

// Recursive solution:

function josephusSurvivor(n, k) {
  console.log(k);
  return n < 1 ? 1 : ((josephusSurvivor(n - 1, k) + --k) % n) + 1;
}
