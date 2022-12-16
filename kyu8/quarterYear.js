// 8 kyu
// Quarter of the year
// JavaScript:

// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.
// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

const quarterOf = (month) => {
    // Your code here
    return month <= 3 ? 1 : month <= 6 ? 2 : month <= 9 ? 3 : 4;
}

// Nice:

// const quarterOf = (month) => {
//     // Your code here
//     return Math.ceil(month / 3);
// }