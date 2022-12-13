// 8 kyu
// Remove String Spaces
// JavaScript:

// Simple, remove the spaces from the string, then return the resultant string.

function noSpace(x) {
    let newStr = '';  
    for (const chara of x) {
        if (chara !== ' ') {
            newStr += chara;
        }
    }
    return newStr;
}

// Shorter solution with RegExp:

// function noSpace(x){
//     return x.replace(/\s/g, '');
// }

// Shorter solution by splitting and joining:

// function noSpace(x){return x.split(' ').join('')}