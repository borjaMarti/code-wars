// 7 kyu
// Isograms
// JavaScript: 

// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false

function isIsogram(str){
    let compare = [];
    for (let chr of str) {
        if (compare.includes(chr.toLowerCase())) return false;
        compare.push(chr.toLowerCase());
    }
    return true;
}

// Solution using Set object (creates a new set from the original string composed of a single instance of each of its characters, and compares the set's size to the string's length):

// function isIsogram(str){
// 	return new Set(str.toUpperCase()).size == str.length;
// }