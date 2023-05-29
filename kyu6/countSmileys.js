// 6 kyu
// Count the smiley faces!
// JavaScript

// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

// Rules for a smiling face:

//     Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
//     A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
//     Every smiling face must have a smiling mouth that should be marked with either ) or D

// No additional characters are allowed except for those mentioned.

// Valid smiley face examples: :) :D ;-D :~)
// Invalid smiley faces: ;( :> :} :]

// countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
// countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
// countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;

// In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same.

function countSmileys(arr) {
    return arr.filter( elem => {
                if ( elem.length > 3 || (elem[0] !== ':' && elem[0] !== ';') ) return;
                if ( elem.length === 2 && (elem[1] !== ')' && elem[1] !== 'D') ) return;
                if ( elem.length === 3 && ( (elem[1] !== '-' && elem[1] !== '~') || (elem[2] !== ')' && elem[2] !== 'D') ) ) return;
                return elem;
            }).length;
}

// Other than loops through all possible combinations, another possible solution would be regex:

// function countSmileys(arr) {
//     return arr.filter(x => /^[:;][-~]?[)D]$/.test(x)).length;
// }