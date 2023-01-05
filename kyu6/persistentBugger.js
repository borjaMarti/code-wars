// 6 kyu
// Persistent Bugger.
// JavaScript:

// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)

function persistence(num) {
    return recursiveCounter(num, 0);

    function recursiveCounter(num, count) {
        if ( String(num).length > 1 ) {
            count++;
            num = String(num).split('').reduce( (a, b) => +a * +b );
            return recursiveCounter(num, count);
        } else return count;
    }
}

// Simpler solution:

// function persistence(num) {
//     for (let i = 0; num > 9; i++) {
//       num = num.toString().split('').reduce((a, b) => a * b);
//     }
//     return i;
// }

// Recursive one-liner I liked:

// function persistence(num) {
//     return num > 9 
//       ? persistence(num.toString().split('').reduce( (a, b) => a * b )) + 1
//       : 0;
// }