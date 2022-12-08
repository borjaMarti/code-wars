// 8 kyu
// Reversed Strings
// JavaScript:

// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function solution(str){
    let reverseStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reverseStr += `${str[i]}`;
    }
    return reverseStr;
}

// I knew there'd be an easier solution, 
// but I didn't know the methods so I went with mine.

// For reference, better solution:

// function solution(str){
//     return str.split('').reverse().join('');
// }