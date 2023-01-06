// 6 kyu
// Your order, please
// JavaScript:

// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

function order(words){
    return words.split(' ')
                .sort( (a, b) => +a.split('').filter( elem => +elem === +elem).join('') - +b.split('').filter( elem => +elem === +elem).join(''))
                .join(' ');
}

// Most solutions resorted to RegExp, so I'm happy with mine. 
// A couple that didn't make use of the find() method.

// The simplest and my favorite, using find to grab the number instead of filter (so, faster):

// function order(words){
//     return words.split(' ').sort((a,b) => a.split('').find(Number) - b.split('').find(Number)).join(' ');
// }