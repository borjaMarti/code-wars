// 6 kyu
// Build Tower
// JavaScript:

// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]

// And a tower with 6 floors looks like this:

// [
//   "     *     ",
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ",
//   " ********* ", 
//   "***********"
// ]

function towerBuilder(nFloors) {
    let tower = [];
    let base = (2 * nFloors) - 1;
    
    for (let i = 1; i <= nFloors; i++) {
      let blocks = 2 * i - 1;
      let pad = (base - blocks) / 2;
      let str = ' '.repeat(pad) + '*'.repeat(blocks) + ' '.repeat(pad);
      tower.push(str);
    }
    
    return tower;
}

// Alternative with Array.from:

// function towerBuilder(nFloors) {
//     return Array.from({ length: nFloors }, (_, i) => {
//         let blocks = i + i + 1;
//         let pad = nFloors - i - 1;
//         return ' '.repeat(pad) + '*'.repeat(blocks) + ' '.repeat(pad);
//     });
// }