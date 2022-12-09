// 8 kyu
// Remove First and Last Character
// JavaScript:

// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

function removeChar(str){
    let arr = str.split('');
    arr.shift();
    arr.pop();
    return arr.join('');
};

// Short answer (didn't know about .slice() ):

// function removeChar(str) {
//     return str.slice(1, -1);
// }