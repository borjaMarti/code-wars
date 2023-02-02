// 8 kyu
// Is it a palindrome?
// JavaScript:

// Write a function that checks if a given string (case insensitive) is a palindrome.

function isPalindrome(x) {
    return x.toLowerCase().split('').reverse().join('') === x.toLowerCase() ? true: false;
}

// First try.