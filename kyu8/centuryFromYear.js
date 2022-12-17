// 8 kyu
// Century From Year
// JavaScript:

// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Given a year, return the century it is in.

// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20

function century(year) {
    return year % 100 === 0 ? year / 100 : Math.ceil(year / 100);
}

// There was no need for the ternary. I didn't notice that Math.ceil(year / 100) on an integer would return the integer anyway:

// function century(year) {
//     return Math.ceil(year/100);
// }