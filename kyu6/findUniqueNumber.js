// 6 kyu
// Find the unique number
// JavaScript:

// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

function findUniq(arr) {
  if (arr[0] === arr[1]) {
    for (let n of arr) {
      if (n !== arr[0]) return n;
    }
  }
  
  return arr[0] !== arr[2] ? arr[0] : arr[1];
}

// General solution, if there are different non-unique numbers:

// function findUniq(arr) {
//   const hashSet = new Set();
//   const candidateSet = new Set();

//   for ( let n of arr ) {
//     if ( hashSet.has(n) && candidateSet.has(n) ) candidateSet.delete(n);
//     if ( !hashSet.has(n) ) candidateSet.add(n);
    
//     hashSet.add(n);
//   }
  
//   for ( let n of candidateSet.values() ) {
//     return n;
//   }
// }