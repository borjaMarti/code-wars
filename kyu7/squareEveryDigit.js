// 7 kyu
// Square Every Digit
// JavaScript:

// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

function squareDigits(num){
    let arrNums = num.toString().split('');
    let arrReturn = [];

    arrNums.forEach( (element) => {
        arrReturn.push(Number(element) ** 2);
    });

    return Number(arrReturn.join(''));
}

// "One" liner:

// function squareDigits(num){
//     return Number(num
//         .toString()
//         .split('')
//         .map( element => element * element)
//         .join(''));
// }