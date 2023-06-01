// 6 kyu
// Convert string to camel case
// JavaScript:

// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

// "the-stealth-warrior" gets converted to "theStealthWarrior"

// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"

function toCamelCase(str) {
    return str.split('').reduce( (a, c) => {
      if (a[a.length - 1] === '-' || a[a.length - 1] === '_') return a.slice(0, a.length - 1) + c.toUpperCase();
      return a + c;
    }, '');
}

// RegExp solution:

// function toCamelCase(str){
//     return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
// }