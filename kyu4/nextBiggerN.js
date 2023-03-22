// 4 kyu
// Next bigger number with the same digits
// JavaScript:

// Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. For example:

//   12 ==> 21
//  513 ==> 531
// 2017 ==> 2071

// If the digits can't be rearranged to form a bigger number, return -1:

//   9 ==> -1
// 111 ==> -1
// 531 ==> -1

function nextBigger(n) {
    // We create an array containing the digits from the original number (in reverse for easier manipulation).
    let nArr = Array.from(String(n), n => +n).reverse();
    let result;

    // We iterate each of the digits in search of a new permutation bigger than the original.
    for (let i = 0; i < nArr.length; i++) {
        let currentDigit = nArr[i];
        
        // The nested iteration will allow us to compare the current digit to those that follow.
        for (let j = i + 1; j < nArr.length; j++) {
            if (currentDigit > nArr[j]) {
                // We create a new number by swapping the current digit for the first of the following digits to be smaller.
                let nArrNew = nArr.slice();
                [ nArrNew[i], nArrNew[j] ] = [ nArrNew[j], nArrNew[i] ];

                // We make sure this new number is its smallest version by sorting in ascending order the digits that come after the new higher digit.
                let nNew = Number(nArrNew.slice(0, j).sort((a, b) => b - a).concat(nArrNew.slice(j)).reverse().join(''));

                // If this number is smaller than the one found before, we replace it (or if it's the first to be found, we assign its value).
                if (nNew < result || !result) {
                    result = nNew;
                }

                break;
            }
        }
    }
    
    // If we didn't find any new permutations (the loops ran without modifications), we'll return -1.
    return result || -1;
}

// Took me some time, had to test and debug many implementations.

// I checked which numbers weren't working, and made fixes so it would work. Eventually arrived at this solution (which works with any number).

// Very fun problem! I enjoyed the challenge ^^