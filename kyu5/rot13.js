// 5 kyu
// Rot13
// JavaScript:

// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

function rot13(message){
    const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'.repeat(2).split('');

    return message.split('')
                  .map( elem => {
                    if (ALPHABET.includes(elem)) return ALPHABET[ALPHABET.indexOf(elem) + 13];
                    else if (ALPHABET.includes(elem.toLowerCase())) return ALPHABET[ALPHABET.indexOf(elem.toLowerCase()) + 13].toUpperCase();
                    else return elem;
                  })
                  .join('')
}

// Another similar implementation I liked by using the modulus operator (also, there was no need to use an array for the ALPHABET constant):

// function rot13(message){
//     const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';

//     return message.split('')
//                   .map( elem => {
//                     if (ALPHABET.includes(elem)) return ALPHABET[ALPHABET.indexOf(elem) + 13 % ALPHABET.length];
//                     else if (ALPHABET.includes(elem.toLowerCase())) return ALPHABET[ALPHABET.indexOf(elem.toLowerCase()) + 13 % ALPHABET.length];
//                     else return elem;
//                   })
//                   .join('')
// }