// 4 kyu
// Roman Numerals Helper
// JavaScript:

// Create a RomanNumerals class that can convert a roman numeral to and from an integer value. It should follow the API demonstrated in the examples below. Multiple roman numeral values will be tested for each helper method.

// Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

// Input range : 1 <= n < 4000

// In this kata 4 should be represented as IV, NOT as IIII (the "watchmaker's four").

// RomanNumerals.toRoman(1000); // should return 'M'
// RomanNumerals.fromRoman('M'); // should return 1000

class RomanNumerals {
    static numerals = {
            'units': ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
            'tens': ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
            'hundreds': ['C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'],
            'thousands': ['M', 'MM', 'MMM']
        }
    
    static toRoman(integer) {
        let roman = String(integer).split('');
        
        roman[roman.length - 1] = this.numerals.units[roman[roman.length - 1] - 1];
        if (roman.length > 1) roman[roman.length - 2] = this.numerals.tens[roman[roman.length - 2] - 1];
        if (roman.length > 2) roman[roman.length - 3] = this.numerals.hundreds[roman[roman.length - 3] - 1];
        if (roman.length > 3) roman[roman.length - 4] = this.numerals.thousands[roman[roman.length - 4] - 1];
        
        return roman.join('');
    }
    
    static fromRoman(roman) {
        let integer = 0;
        let multiplier = 1;
      
        for (let position of Object.keys( this.numerals ) ) {
            if (roman.includes(this.numerals[position][4]) && !roman.includes(this.numerals[position][0]) ) {
                integer += 5 * multiplier;
                roman = roman.slice(0, roman.indexOf( this.numerals[position][4] ) );
                multiplier *= 10;
                continue;
            }

            for (let number of this.numerals[position].slice().reverse() ) {
              if (number === this.numerals[position][4]) continue;
              if (roman.includes(number) ) {
                    integer += (this.numerals[position].indexOf(number) + 1) * multiplier;
                    roman = roman.slice(0, roman.indexOf(number) );
                    break;
                }
            }

            multiplier *= 10;
        }

        return integer;
    }
}

// If not optimal, at least my solution is original (consolation prize ><).

// Other implementations I liked:

// O(n) solution, doesn't have loops inside loops:

// class RomanNumerals {
//     static numerals = [[1000, 'M'], [900,'CM'], [500,'D'],[400,'CD'], [100,'C'], [90,'XC'], [50,'L'], [40,'XL'], [10,'X'], [9,'IX'], [5,'V'], [4,'IV'], [1,'I']];
    
//     static toRoman(integer) {
//       let roman = '';
      
//       for(let i = 0 ; i < this.numerals.length && integer > 0 ; i ++) {
//         if (this.numerals[i][0] <= integer) { 
//             roman += this.numerals[i][1];
//             integer -= this.numerals[i][0]; 
//             --i;
//         }
//       }

//       return roman;
//     }
    
//     static fromRoman(roman) {
//       let integer = 0;
      
//       for(let i = 0 ; i < this.numerals.length ; i++) {
//         if (roman.slice(0, this.numerals[i][1].length) === this.numerals[i][1]) {
//             integer += this.numerals[i][0];
//             roman = roman.slice(this.numerals[i][1].length);
//             --i; 
//         }
//       }

//       return integer;
//     }
// }

// Clever use of the numerals, takes less space and uses reduce. Still, it has another loop inside, pushing it to O(n**2).

// class RomanNumerals {
//     static numerals =  [
//         { value: 1000, char: 'M' },
//         { value: 900, char: 'CM' },
//         { value: 500, char: 'D' },
//         { value: 400, char: 'CD' },
//         { value: 100, char: 'C' },
//         { value: 90, char: 'XC' },
//         { value: 50, char: 'L' },
//         { value: 40, char: 'XL' },
//         { value: 10, char: 'X' },
//         { value: 9, char: 'IX' },
//         { value: 5, char: 'V' },
//         { value: 4, char: 'IV' },
//         { value: 1, char: 'I' }
//       ]

//     static toRoman(num) {
//       return this.numerals.reduce((result, current) => {
//         while (num >= current.value) {
//           result += current.char;
//           num -= current.value;
//         }
        
//         return result;
//       }, '')
//     }
    
//     static fromRoman(str) {
//       return this.numerals.reduce((result, current) => {
//         while (!str.indexOf(current.char)) {
//           result += current.value;
//           str = str.replace(current.char, '');
//         }
        
//         return result;
//       }, 0)
//     }
// }