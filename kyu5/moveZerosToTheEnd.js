// 5 kyu
// Moving Zeros To The End
// JavaScript:

// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]


function moveZeros(arr) {
    let count = 0;

    let newArr = arr.filter( elem => {
      if (elem === 0) {
        count++;
        return false;
      }
      
      return true;
    });
                      
    for (let i = 1; i <= count; i++) {
      newArr.push(0);
    }
    
    return newArr;
  }

// Shorter implementetions I liked: 

// function moveZeros(arr) {
//     return [
//       ...(arr.filter(n => n !== 0)),
//       ...(arr.filter(n => n === 0))
//     ];
// }

// function moveZeros(arr) {
//     return arr.sort((a, b) => b === 0 ? -1 : 0);
// }