// 6 kyu
// Unique In Order
// JavaScript:

// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

function uniqueInOrder(iterable){
    if (typeof iterable === 'string') iterable = iterable.split('');
    return iterable.filter( (elem, index, arr) => elem !== arr[index - 1]);
}

// Could forego the conditional by using spread syntax on iterable:

// [...iterable].filter( (elem, index, arr) => elem !== arr[index - 1]);