// 6 kyu
// Sort the odd
// JavaScript:

// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

function sortArray(array) {
    let sortedOdds = array.filter( elem => elem % 2 !== 0).sort( (a, b) => b - a);
    return array.map( elem => {
        if (elem % 2 !== 0) return sortedOdds.pop();
        else return elem;
    });
}

// First try optimal implementation, could be shortened by using a ternary on the return:

// return array.map( elem => elem % 2 === 0 ? elem : sortedOdds.pop();