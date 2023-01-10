// 5 kyu
// Maximum subarray sum
// JavaScript:

// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]

// Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

// Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

function maxSequence(arr) {
    let finalValue = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = arr.length; j > 0; j--) {
            let currentValue = arr.slice(i, j).reduce( (a, b) => a + b, 0);

            if (currentValue > finalValue) {
                finalValue = currentValue;
            }
        }
    }

    return finalValue;
}

// Optimal solution (mine is O(n2), this one is O(n)), using Kadane's Algorithm:

// function maxSequence(arr) {
//     let globalMax = 0;
//     let localMax = 0;

//     arr.forEach( elem => {
//         localMax = Math.max(elem, elem + localMax);
//         if (localMax > globalMax) globalMax = localMax;
//     });

//     return globalMax;
// }