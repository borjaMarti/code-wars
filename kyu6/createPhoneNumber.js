// 6 kyu
// Create Phone Number
// JavaScript:

// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

// The returned format must be correct in order to complete this challenge.

// Don't forget the space after the closing parentheses!

function createPhoneNumber(numbers){
    return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`;
}

// Alternate looping version I made:

// function createPhoneNumber(numbers){
//     let phone = [];

//     numbers.forEach((elem, index) => {
//         if (index === 0) phone.push('(' + elem);
//         else if (index === 2) phone.push(elem + ')' + ' ');
//         else if (index === 5) phone.push(elem + '-');
//         else phone.push(elem);
//     });
  
//     return phone.join('');
// }