// 6 kyu
// Counting Duplicates
// JavaScript:

// Count the number of Duplicates

// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

function duplicateCount(text){
    let instancesCount = {};
    let finalCount = 0;

    text.toLowerCase().split('').forEach( char => {
        if ( instancesCount[char] ) instancesCount[char]++;
        else instancesCount[char] = 1;
    })
    
    Object.keys(instancesCount).forEach( prop => { 
        if (instancesCount[prop] > 1) finalCount++;
    })

    return finalCount;
}

// Clever solution (filtering from array based on whether the given value's index isn't the first instance BUT is the last, resulting in an array which length is the same as the number of duplicates):

// function duplicateCount(text){
//     return text.toLowerCase().split('').filter(function(val, i, arr){
//       return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
//     }).length;
// }

// Similar implementation to mine, but using an object instanced from a reduce method with a baked-in counter property. Ternary declares a property on the accumulator object with the character as the key and value 1 if it doesn't already exist, otherwise it increments its value by one. If the value is exactly 2, the baked-in counter is incremented by 1. Finally, the reduced object's count value is returned.

// function duplicateCount(text){
//   return text
//       .toLowerCase()
//       .split('')
//       .reduce(function(a, l) {
//         a[l] = a[l] ? a[l]+1 : 1;
//         if(a[l] === 2) a.count++;
//         return a;
//       }, {count:0}).count;
// }