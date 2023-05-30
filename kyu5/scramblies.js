// 5 kyu
// Scramblies
// JavaScript:

// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

//     Only lower case letters will be used (a-z). No punctuation or digits will be included.
//     Performance needs to be considered.

// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False

function scramble(str1, str2) {
    let repeatMap = new Map();

    for (let character of str2) {
      let index;
      
      if (repeatMap.has(character)) {
        index = str1.indexOf(character, repeatMap.get(character));
      } else index = str1.indexOf(character);

      if (index < 0) return false;
      
      repeatMap.set(character, index + 1);
    }

    return true;
}

// The author's solutions implements the hash map idea by looping through all of str1's characters and counting the number of times a given character appears. Then, it loops through str2's characters, checking whether they are present in the map, and decreasing their count accordingly.

// function scramble(str1, str2) {
//     let map = {};

//     for (let character of str1) {
//         map[character] = map[character] + 1 || 1;
//     }

//     for (let character of str2) {
//       if(!map[character]) return false;

//       map[character]--;
//     }

//     return true;
// }