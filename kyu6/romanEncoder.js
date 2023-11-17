// 6 kyu
// Roman Numerals Encoder
// JavaScript:

// Create a function taking a positive integer between 1 and 3999 (both included) as its parameter and returning a string containing the Roman Numeral representation of that integer.

// Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

// solution(1000); // should return 'M'

// Help:

// Symbol    Value
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000

// Remember that there can't be more than 3 identical symbols in a row.

function solution(number) {
  const numerals = {
    units: ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
    tens: ["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
    hundreds: ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
    thousands: ["M", "MM", "MMM"],
  };

  let roman = String(number).split("");

  roman[roman.length - 1] = numerals.units[roman[roman.length - 1] - 1];
  if (roman.length > 1)
    roman[roman.length - 2] = numerals.tens[roman[roman.length - 2] - 1];
  if (roman.length > 2)
    roman[roman.length - 3] = numerals.hundreds[roman[roman.length - 3] - 1];
  if (roman.length > 3)
    roman[roman.length - 4] = numerals.thousands[roman[roman.length - 4] - 1];

  return roman.join("");
}
