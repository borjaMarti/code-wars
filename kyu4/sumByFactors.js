// 4 kyu
// Sum by Factors
// JavaScript:

// Given an array of positive or negative integers

//  I= [i1,..,in]

// you have to produce a sorted array P of the form

// [ [p, sum of all ij of I for which p is a prime factor (p positive) of ij] ...]

// P will be sorted by increasing order of the prime numbers. The final result has to be given as an array of arrays.

// I = [12, 15]; //result = [[2, 12], [3, 27], [5, 15]]

// [2, 3, 5] is the list of all prime factors of the elements of I, hence the result.

// It can happen that a sum is 0 if some numbers are negative!

// Example: I = [15, 30, -45] 5 divides 15, 30 and (-45) so 5 appears in the result, the sum of the numbers for which 5 is a factor is 0 so we have [5, 0] in the result amongst others.

function sumOfDivided(lst) {
    const primesMap = new Map();
    
    for (let n of lst) {
      const factorsSet = new Set();
      let nCopy = n;
      
      while (nCopy > 0 ? nCopy > 1 : nCopy < -1) {
        if (nCopy % 2 === 0) {
          factorsSet.add(2);
          nCopy /= 2;
          continue;
        }
        
        for (let i = 3; n !== 1; i+=2) {
          if (nCopy % i === 0) {
            factorsSet.add(i);
            nCopy /= i;
            break;
          }
        }
      }
      
      for (let f of factorsSet.values()) {
          primesMap.has(f) ? primesMap.set(f, primesMap.get(f) + n) : primesMap.set(f, n);
      }
      
    }
    
    return Array.from(primesMap).sort((a, b) => {
      return a[0] - b[0];
    });
}

// Happy with my solution. I re-used concepts from my kyu5 primesInNumbers.js

// Another curious implementation, refactored:

// function sumOfDivided(lst) {
//     if (lst.length === 0) {
//       return []; 
//     }
  
//     let m = Math.max(...lst.map(Math.abs)),
//         primes = [],
//         marked = Array(m + 1);

//     for (let i = 2; i <= m; ++i) {
//         if (marked[i]) continue;

//         let sum = 0,
//             isMul = false;
      
//         lst.forEach( n => {
//           if (n % i === 0) { 
//             sum += n; 
//             isMul = true; 
//           } 
//         });
      
//         if (isMul) primes.push([i, sum]);

//         for (let j = 2 * i; j <= m; j += i) {
//             marked[j] = true;
//         }
//     }

//     return primes;
// }