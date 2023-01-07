// 6 kyu
// Take a Ten Minutes Walk
// JavaScript:

// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

//     Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).

function isValidWalk(walk) {
    let x = 0;
    let y = 0;
    let timer = 0;

    walk.forEach( direction => {
        timer++;
        switch(direction) {
            case 'n':
                y++;
                break;
            case 's':
                y--;
                break;
            case 'e':
                x++;
                break;
            case 'w':
                x--;
                break;
        }
    });

    if (x === 0 && y === 0 && timer === 10) return true;
    else return false;
}

// Implementation I also liked. Compares whether both senses of the same direction are equal. For the return, since comparison results in a boolean, it's directly returned.

// function isValidWalk(walk) {
//     let directions = {n:0, w:0, s:0, e:0};
//     walk.forEach((direction) => res[direction]++);
//     return walk.length === 10 && res.n == res.s && res.e == res.w;
// }