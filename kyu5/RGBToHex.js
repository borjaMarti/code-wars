// 5 kyu
// RGB To Hex Conversion
// JavaScript:

function rgb(r, g, b) {
    const DICTIONARY = {
      10: 'A',
      11: 'B',
      12: 'C',
      13: 'D',
      14: 'E',
      15: 'F'
    };

    let rgbs = [r, g, b];
    let hex = '';
    
    rgbs.forEach( (elem, index) => {
        if (elem > 255) rgbs[index] = 255;
        if (elem < 0) rgbs[index] = 0;
    });
    
    rgbs.forEach( elem => {
        if ( Math.floor(elem / 16) > 9 ) {
            hex += DICTIONARY[Math.floor(elem / 16)];
        } else hex += Math.floor(elem / 16);
        
        if ( elem % 16 > 9 ) {
            hex += DICTIONARY[Math.floor(elem % 16)]
        } else hex += Math.floor(elem % 16);
    });

    return hex;
}

// Number.prototype.toString includes a parameter to select the base you want to convert the number to. Using that method the solution would look like this:

// function rgb(r, g, b) {
//     [r, g, b].map(elem => Math.max(Math.min(elem, 255), 0)
//                     .toString(16)
//                     .padStart(2, '0')
//                     .toUpperCase()
//             ).join('');
// }