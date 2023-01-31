// 5 kyu
// Valid Parentheses
// JavaScript:

// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true

// 0 <= input.length <= 100


function validParentheses(parens) {
    let count = 0;
    let incorrectOrder = false;
    parens.split('').forEach(elem => elem === '(' ? count++ : count === 0 ? incorrectOrder = true : count--);
    if (incorrectOrder) return false;
    return !count;
}

// Another way of looping allowing to stop the parse upon issue:

// function validParentheses(parens) {
//     let count = 0;
//     for (let i = 0; i < parens.length; i++) {
//       if (parens[i] == '(') count++;
//       if (parens[i] == ')') count--;
//       if (count < 0) return false;
//     }
    
//     return !count;
// }