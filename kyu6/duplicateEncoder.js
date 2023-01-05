// 6 kyu
// Duplicate Encoder
// JavaScript:

// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 

function duplicateEncode(word){
    return word
            .toLowerCase()
            .split('')
            .map( (char, index, array) => {
                if (array.indexOf(char) === array.lastIndexOf(char)) return '(';
                else return ')';
            })
            .join('');
}

// Shorter implementation with ternary:

// .map( (char, index, array) => {
//     return array.indexOf(char) === array.lastIndexOf(char) ? '(' : ')';
// })