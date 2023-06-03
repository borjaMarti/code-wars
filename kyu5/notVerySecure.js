// 5 kyu
// Not very secure
// JavaScript:

// In this example you have to validate if a user input string is alphanumeric. The given string is not nil/null/NULL/None, so you don't have to check that.

// The string has the following conditions to be alphanumeric:

//     At least one character ("" is not valid)
//     Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
//     No whitespaces / underscore

function alphanumeric(string){
    const ALPHABET = [];
    
    for (let i = 48; i <= 57; i++) {
      ALPHABET.push(String.fromCharCode(i));
    }
    
    for (let i = 97; i <= 122; i++) {    
      ALPHABET.push(String.fromCharCode(i));
      ALPHABET.push(String.fromCharCode(i).toUpperCase());
    }
    
    if (!string) return false;
    
    if (string.split('').every(c => ALPHABET.includes(c))) return true;
    
    return false;
}

// RegExp solution:

// function alphanumeric(string) {
//     return /^[0-9a-z]+$/i.test(string);
// }