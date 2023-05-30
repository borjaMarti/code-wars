// 5 kyu
// String incrementer
// JavaScript:

// Your job is to write a function which increments a string, to create a new string.

//     If the string already ends with a number, the number should be incremented by 1.
//     If the string does not end with a number. the number 1 should be appended to the new string.

// foo -> foo1
// foobar23 -> foobar24
// foo0042 -> foo0043
// foo9 -> foo10
// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

function incrementString(strng) {
    // We start by converting the string into an array and reversing it, since the number we are working with is always at the end.
    let arr = [...strng].reverse();
    let index;

    // This loop identifies the index at which the ending number ends.
    for (let i = 0; i < arr.length; i++) {
      // It does so by checking if the character converted to number equals itself making use of the NaN never being equal to itself property. Found another way to do this by using isNaN(+arr[i]) instead.
      if (+arr[i] !== +arr[i]) {
        index = i;
        break;
      }
    }

    // Once we have the final index of the number, we extract it and save its length to readd any starting zeroes.
    let num = arr.slice(0, index).reverse().join('');
    let numLength = num.length;

    // We increment the number by one and readd any missing starting zeroes.
    num = (+num + 1).toString().padStart(numLength, '0');

    // If the initial string was made up of only numbers, we return the new number.
    if (+strng === +strng) return num;

    // Otherwise, we update the number in the original string.
    return arr.slice(index).reverse().join('') + num;
}

// All in all, happy with my implementation, as most of the simpler answers involved regex manipulation. On other answer I found interesting was the following one, involving recursion:

// function incrementString(str) {
// 	let c = str[str.length - 1];

//     switch(c) {
//         case '0':
//         case '1':
//         case '2':
//         case '3':
//         case '4':
//         case '5':
//         case '6':
//         case '7':
//         case '8': return str.slice(0, str.length - 1) + (+c + 1);
//         case '9': return incrementString(str.slice(0, str.length - 1)) + 0;
//         default: return str + '1';
//     }
// }