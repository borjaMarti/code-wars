// 7 kyu
// Vowel Count
// JavaScript:

// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
    let count = 0;
    
    for (chr of str) {
        if (chr === 'a' || chr === 'e' || chr === 'i' || chr === 'o' || chr === 'u') {
        count++;
        }
    }
    
    return count;
}

// Shorter solutions:

// function getCount(str) {
//     return (str.match(/[aeiou]/ig)||[]).length;
// }

// function getCount(str) {
//     return str.replace(/[^aeiou]/gi, '').length;
// }

// Nice:

// function getCount(str) {
//     return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
// }