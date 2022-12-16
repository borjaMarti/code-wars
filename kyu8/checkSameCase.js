// 8 kyu
// Check same case
// JavaScript:

// Write a function that will check if two given characters are the same case.
// If either of the characters is not a letter, return -1
// If both characters are the same case, return 1
// If both characters are letters, but not the same case, return 0


function sameCase(a, b) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if ( !alphabet.includes(a) || !alphabet.includes(b) ) {
        return -1;    
    } else if ( a === a.toLowerCase() && b === b.toLowerCase() || a === a.toUpperCase() && b === b.toUpperCase() ) {
        return 1;
    } else return 0;
}

// Favorite:

// function sameCase(a, b){
//     if (a.toLowerCase() === a.toUpperCase() || b.toLowerCase() === b.toUpperCase()) {
//       return -1;
//     }
//     return (a.toLowerCase() === a) === (b.toLowerCase() === b) ? 1 : 0;
// }

// Nice as well:

// function sameCase(a, b){
//     const alpha = 'abcdefghijklmnopqrstuvwxyz'
//     if(!alpha.includes(a.toLowerCase()) || !alpha.includes(b.toLowerCase())) return -1
    
//     const checkCase = x => {
//       if(x === x.toLowerCase()) return 'lower'
//       if(x === x.toUpperCase()) return 'upper'
//     }
  
//     return checkCase(a) === checkCase(b) ? 1 : 0
// }

// The regex implementation I wanted for -1, but couldn't use because I don't know regex ¯\_(ツ)_/¯:

// if ( !/[a-zA-Z]/.test(a) || !/[a-zA-Z]/.test(b) )