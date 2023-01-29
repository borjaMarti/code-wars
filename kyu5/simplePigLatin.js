// 5 kyu
// Simple Pig Latin
// JavaScript:

// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str) {
    const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';

    return str.split(' ').map(elem => {
        if (!ALPHABET.includes(elem.split('')[0].toLowerCase())) return elem;
        
        let arrElem = elem.split('');
        
        arrElem.push(arrElem.shift() + 'ay');
        
        return arrElem.join('');
    }).join(' ');
}

// Simpler solutions involved RegEx, such as:

// function pigIt(str) {
//     return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3");
// }