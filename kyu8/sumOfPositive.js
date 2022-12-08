// 8 kyu
// Sum of positive
// JavaScript:

// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

// let array = [8,-2,7,-4];

function positiveSum(arr) {
    let counter = 0;
    let filteredArr = arr.filter(newArr => newArr > 0);
    filteredArr.forEach((elem) => {
        let newCounter = counter += elem;
        counter = newCounter;
    })
    return counter;
}