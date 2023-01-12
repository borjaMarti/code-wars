// 5 kyu
// Sum of Pairs
// JavaScript:

// Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.

// If there are two or more pairs with the required sum, the pair whose second element has the smallest index is the solution.

// sum_pairs([11, 3, 7, 5],         10)
// #              ^--^      3 + 7 = 10
// == [3, 7]

// sum_pairs([4, 3, 2, 3, 4],         6)
// #          ^-----^         4 + 2 = 6, indices: 0, 2 *
// #             ^-----^      3 + 3 = 6, indices: 1, 3
// #                ^-----^   2 + 4 = 6, indices: 2, 4
// #  * the correct answer is the pair whose second value has the smallest index
// == [4, 2]

// sum_pairs([0, 0, -2, 3], 2)
// #  there are no pairs of values that can be added to produce 2.
// == None/nil/undefined (Based on the language)

// sum_pairs([10, 5, 2, 3, 7, 5],         10)
// #              ^-----------^   5 + 5 = 10, indices: 1, 5
// #                    ^--^      3 + 7 = 10, indices: 3, 4 *
// #  * the correct answer is the pair whose second value has the smallest index
// == [3, 7]

// Negative numbers and duplicate numbers can and will appear.

// NOTE: There will also be lists tested of lengths upwards of 10,000,000 elements. Be sure your code doesn't time out.

/*

It took a couple hours and many tries before I decided I'd have to Google to find the optimal algorithm. All my implementations fulfill the premises, but aren't optimized, thus causing the exceedingly long tests to time-out. Their time complexity is  quadratic ( O(n^2) ). Finally learned about hash mapping and arrived at the accepted solution, with a linear time complexity ( O(n) ).

*/

// My final implementation:

function sumPairs(ints, s) {
    let hashMap = {};

    for (let i = 0; i < ints.length; i++) {
        if (hashMap.hasOwnProperty(s - ints[i])) {
            return [ints[hashMap[s - ints[i]]], ints[i]];
        };
        hashMap[ints[i]] = i;
    }

    return undefined;
}

// Could be further cleaned up by forgetting about the index:

// function sumPairs(ints, s) {
//     let hashMap = {};

//     for (let i = 0; i < ints.length; i++) {
//         if (hashMap[s - ints[i]]) return [s - ints[i], ints[i]];
//         hashMap[ints[i]] = true;
//     }
// }

// My first attempts, all "valid", but unoptimized:

// function sumPairs(ints, s) {
//     for (let i = 0; i < ints.length; i++) {
//         let pairIndex;
//         let pair = ints.slice(i + 1).find( (elem, index) => {
//             if (elem + ints[i] === s) {
//                 pairIndex = ints.indexOf(elem, i + 1);
//                 return true;
//             }
//         });

//         if (typeof pair === 'number') {
//             return sumPairs(ints.slice(i + 1, pairIndex + 1), s) || [ints[i], pair];
//         }
//     }
    
//     return undefined ;
// }



// function sumPairs(ints, s) {
//     let pairs = [];

//     for (let i = 0; !pairs.find( elem => elem[0] + elem[1] === s); i++) {
//         if (i > 0) pairs.forEach(elem => {
//             elem[1] = ints[i];
//         });
        
//         pairs.push([ints[i]]);

//         if (i > ints.length - 1) return undefined;
//     }

//     return pairs.find( elem => elem[0] + elem[1] === s);
// }



// function sumPairs(ints, s) {

//     for (let i = 0; i < ints.length; i++) {
//         let pair;
        
//         ints.slice(0, i + 1).find(elem => {
//             if (elem + ints[i + 1] === s) {
//                 pair = elem;
//                 return true;
//             }
//         });

//         if (typeof pair === 'number') {
//             return [pair, ints[i + 1]];
//         }
//     }

//     return undefined;
// }

// function sumPairs(ints, s) {
//     for (let i = 0; i < ints.length; i++) {
//         let pairIndex = ints.indexOf(s - ints[i], i + 1);

//         if (ints.indexOf(s - ints[i], i + 1) !== -1) return sumPairs(ints.slice(i + 1, pairIndex + 1), s) || [ints[i], ints[pairIndex]];
//     }
    
//     return undefined ;
// }

// function sumPairs(ints, s) {
//     return ints.reduce( (acc, elem, i, arr) => {
//         let pairIndex = arr.indexOf(s - elem, i + 1);
//         if (pairIndex !== -1) {
//             acc = [];
//             acc[0] = elem;
//             acc[1] = ints[pairIndex];
//             arr.length = arr.indexOf(s - elem, i + 1);
//         }
//         return acc;
//     }, undefined);
// }