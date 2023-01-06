// 6 kyu
// Replace With Alphabet Position
// JavaScript:

// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// alphabetPosition("The sunset sets at twelve o' clock.")

// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

function alphabetPosition(text) {
    const alpha = Array.from(Array(26)).map((elem, index) => index + 65);
    const alphabet = alpha.map((elem) => String.fromCharCode(elem));
    
    return text.toUpperCase()
               .split('')
               .filter(elem => alphabet.includes(elem))
               .map(elem => alphabet.indexOf(elem) + 1)
               .join(' ');
}

// Could have also made a much simpler alphabet with:

// const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

// Another line of solving by using charCodeAt():

// function alphabetPosition(text) {
//     return text.toUpperCase()
//       .split('')
//       .filter(char => char.charCodeAt() > 64 && c.charCodeAt() < 91)
//       .map(char => char.charCodeAt())
//       .join(' ');
//   }