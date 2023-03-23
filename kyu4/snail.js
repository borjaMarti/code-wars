// 4 kyu
// Snail
// JavaScript:

// Snail Sort

// Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

// array = [[1,2,3],
//          [4,5,6],
//          [7,8,9]]
// snail(array) #=> [1,2,3,6,9,8,7,4,5]

// For better understanding, please follow the numbers of the next array consecutively:

// array = [[1,2,3],
//          [8,9,4],
//          [7,6,5]]
// snail(array) #=> [1,2,3,4,5,6,7,8,9]

function snail(array) {
  let answer = [];
  // Direction represents whether we are going 'down' through the matrix or 'up'.
  let direction = 'down';
  // i indicates which subarray we are operating on.
  let i = 0;
  
  // We extract all the elements from the first array in the matrix and remove it.
  array[0].forEach(elem => answer.push(elem));
  array.shift();
  
  // We iterate through the matrix untill we run out of subarrays.
  while (array[0]?.[0]) {
    // First conditional passes if we are in the last subarray (or first, depending on direction).
    if (i === array.length - 1) {
      // This conditional is used if the last subarray is the *only* subarray.
      if (i === 0) {
        // Depending on direction, the elements will have to be reversed before being pushed to the answer array.
        if (direction === 'down') {
          array[0].reverse().forEach(elem => answer.push(elem));
          array.shift();
          continue;
        }
        
        array[0].forEach(elem => answer.push(elem));
        array.shift();
        direction = 'down';
        continue;
      }
      
      // Depending on direction, the elements will have to be reversed before being pushed to the answer array.
      if (direction === 'up') {
        array[0].forEach(elem => answer.push(elem));
        array.shift();
        direction = 'down';
        i = 0;
        continue;
      }
      
      array[array.length - 1].reverse().forEach(elem => answer.push(elem));
      array.pop();
      direction = 'up';
      i = 0;
      continue;
    }    
    
    // If we are going down the matrix, we take the last element of the subarray.
    if (direction === 'down') {
      answer.push(array[i]?.pop());
      i++;
      continue;
    }
    
    // If we are going up the matrix, we take the first element of the subarray.
    if (direction === 'up') {
      // Once we reach the top subarray, we empty it and change direction.
      if (i === 0 && i === array.length - 1) {
        array[0].forEach(elem => answer.push(elem));
        array.shift();
        direction = 'down';
        continue;
      }
      array.reverse();
      answer.push(array[i]?.shift());
      array.reverse();
      i++;
      continue;
    }
  }
  
  // If there were no subarrays we return an empty array.
  return answer[0] ? answer : [];
}

// For debugging, I used the following line at the start of the loop (where X represents the last number to follow the correct order in the answer array):

// if (answer[answer.length - 1] === X) console.log(direction, i, array.length - 1);

// Master solution. So clean (pushes top row, then last value of each row, then reverses everything and loops untill there's nothing left):

// function snail(array) {
//     let solution = [];
    
//     while (array.length) {
//       solution.push(...array.shift());
//       array.forEach(row => solution.push(row.pop()));
//       array.reverse().forEach(row => row.reverse());
//     }

//     return solution;
// }