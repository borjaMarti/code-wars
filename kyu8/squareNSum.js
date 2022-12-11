// 8 kyu
// Square(n) Sum
// JavaScript:

// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

function squareSum(numbers){
    let total = 0;
    numbers.forEach(element => {
        total += element ** 2;
    });
    return total;
}

// Short answer with arr.reduce: 

// function squareSum(numbers){
//     return numbers.reduce(function(sum, n){
//       return (n*n) + sum;
//     }, 0)
// }