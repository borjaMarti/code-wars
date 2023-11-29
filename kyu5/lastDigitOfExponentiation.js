// 5 kyu
// Last digit of a large number
// JavaScript:

// Define a function that takes in two non-negative integers a and b and returns the last decimal digit of a^b. Note that a and b may be very large!

// For example, the last decimal digit of 9^7 is 9, since 9^7 = 4782969. The last decimal digit of (2^200)^(2^300), which has over 10^92 decimal digits, is 6. Also, please take 0^0 to be 1.

// You may assume that the input will always be valid.

// lastDigit("4", "1")            // returns 4
// lastDigit("4", "2")            // returns 6
// lastDigit("9", "7")            // returns 9
// lastDigit("10","10000000000")  // returns 0

const lastDigit = (str1, str2) => {
  // Exponent 0 always returns 1.
  if (str2 === "0") return 1;

  // The last digit of an exponentiation always follows a repeating pattern
  // depending on the base's last digit. The following array is ordered
  // so its indices correspond to an integer (0, 1, 2, 3... and so on).
  const lastDigits = [
    [0, 0, 0, 0],
    [1, 1, 1, 1],
    [6, 2, 4, 8],
    [1, 3, 9, 7],
    [6, 4, 6, 4],
    [5, 5, 5, 5],
    [6, 6, 6, 6],
    [1, 7, 9, 3],
    [6, 8, 4, 2],
    [1, 9, 1, 9],
  ];

  // We only need the last digit of the base to determine the last digit
  // of an exponentation.
  let base = +str1[str1.length - 1];
  // We want the modulo 4 of the exponent so we know how many times the
  // aforementioned pattern in lastDigits has repeated.
  let exponent = Number(BigInt(str2) % BigInt(4));

  return lastDigits[base][exponent];
};

// Could also have simplified this way:

// const lastDigit = (str1, str2) => {
//   if (str2 === "0") return 1;

//   let base = +str1[str1.length - 1];
//   let exponent = Number(BigInt(str2) % BigInt(4))
//     ? Number(BigInt(str2) % BigInt(4))
//     : 4;

//   return Math.pow(base, exponent) % 10;
// };
