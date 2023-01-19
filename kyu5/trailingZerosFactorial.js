// 5 kyu
// Number of trailing zeros of N!
// JavaScript:

// Write a program that will calculate the number of trailing zeros in a factorial of a given number.

// N! = 1 * 2 * 3 *  ... * N

// Be careful 1000! has 2568 digits...

// For more info, see: http://mathworld.wolfram.com/Factorial.html

// zeros(6) = 1
// # 6! = 1 * 2 * 3 * 4 * 5 * 6 = 720 --> 1 trailing zero

// zeros(12) = 2
// # 12! = 479001600 --> 2 trailing zeros

// Hint: You're not meant to calculate the factorial. Find another way to find the number of zeros.


function zeros (n) {
    let trailingZeros = 0;
    let kMax = Math.log(n) * (1 / Math.log(5));
    
    for (let k = 1; k <= kMax; k++) {
      trailingZeros += Math.floor(n / (5 ** k));
    }
    
    return trailingZeros;  
}

// At first, I tried finding out a solution by myself, and thought the key was in the multiples of 5, because with 5! we have one zero, 10! two, 15! 3... So I wrote the simple solution of n - (n % 5) / 5. Then, testing I realized 30! didn't have the expected 6 zeros, but 7. The problem, as I realize now from the simpler solution below, is that by substracting n % 5 I was leaving out divisible 5s and subsequently 0s.

// I followed the Wolfram page on factorials and implemented the formula used, but here is a simpler solution:

// function zeros (n) {
//     let trailingZeros = 0;

//     while(n > 0){
//       n = Math.floor(n / 5);
//       trailingZeros += n;
//     }

//     return trailingZeros;
// }