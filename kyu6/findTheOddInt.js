// 6 kyu
// Find the odd int
// JavaScript:

// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

function findOdd(A) {
    let count = {};
    A.forEach(int => {
        count[int] ? count[int]++ : count[int] = 1;
    });
    let answer = Object.entries(count).filter(number => {
        return number[1] % 2 !== 0; 
    });
    return +answer[0][0];
}

// Possible optimization:

// Instead of creating a new array to filter, we could just iterate over the original count object using a similar method:

// for(property in count) {
//     if (obj[property] % 2 !== 0) return +property;
// }

// Understandable one liner solution:

// function findOdd(A) {
//     return arr.find((item, index) => arr.filter(el => el == item).length % 2);
// }

// Arcane XOR solution:

// function findOdd(A) {
//     return A.reduce( (accumulator, element) => accumulator ^ element );
// }