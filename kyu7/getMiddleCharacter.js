// 7kyu
// Get the Middle Character
// JavaScript:

// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.


// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"

function getMiddle(s) {
  let arr = s.split('');
  return arr.length % 2 === 0 ? arr.slice(arr.length/2 - 1, arr.length / 2 + 1).join('') : arr[Math.floor(arr.length / 2)];
}

// What I learned from other answers:

// Ternary condition could be shorter, since if arr.length / 2 returns 0 it's considered false. Also, using charAt I could directly work the string:

// function getMiddle(s) {
//     var middle = s.length / 2;
//     return (s.length % 2) 
//       ? s.charAt(Math.floor(middle))
//       : s.slice(middle - 1, middle + 1);
// }

Short solution, 

// Slice automatically uses Math.floor on decimal number positions, so it doesn't matter whether the lenght is odd:

// function getMiddle(s) {
//   return s.slice((s.length-1)/2, s.length/2+1);
// }