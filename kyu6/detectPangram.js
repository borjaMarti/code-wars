// 6 kyu
// Detect Pangram
// JavaScript:

// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string) {
    const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
    let alphabetMap = {};
    
    ALPHABET.split('').forEach( elem => alphabetMap[elem] = true);
    string.toLowerCase().split('').forEach( elem => delete alphabetMap[elem]);

    return Object.keys(alphabetMap).length === 0 ? true : false;
}

// Optimal solution involves the method Array.prototype.every(), which allows us to loop through every element of an array and test for a condition. If every element passes the test, true is returned. Otherwise, false is returned:

// function isPangram(string) {
//     return 'abcdefghijklmnopqrstuvwxyz'
//       .split('')
//       .every((elem) => string.toLowerCase().includes(elem));
// }