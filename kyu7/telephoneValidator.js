// freeCodeCamp JS & Algorithms Course
// Telephone Number Validator
// JavaScript:

// Return true if the passed string looks like a valid US phone number.

// The user may fill out the form field any way they choose as long as it has
// the format of a valid US number. The following are examples of valid formats
// for US numbers (refer to the tests below for other variants):

//     555-555-5555
//     (555)555-5555
//     (555) 555-5555
//     555 555 5555
//     5555555555
//     1 555 555 5555

// For this challenge you will be presented with a string such as 800-692-7753
// or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone
// number based on any combination of the formats provided above. The area code
// is required. If the country code is provided, you must confirm that the
// country code is 1. Return true if the string is a valid US phone number;
// otherwise return false.

function telephoneCheck(str) {
  str = str.split(" ").join("");

  let count = 0;
  for (let c of str) {
    if (0 / +c === 0 / +c) count++;
  }
  if (count !== 10 && count !== 11) return false;

  if (str[0] === "1") {
    if (str.includes("(")) {
      if (str.indexOf("(") !== 1) return false;
      if (str.indexOf(")") !== 5) return false;
      if (str.includes("-")) {
        if (str.indexOf("-") !== 9) return false;
        if (str.length !== 14) return false;
      } else if (str.length !== 13) return false;
    } else if (str.includes("-")) {
      if (str.indexOf("-") !== 4 || str.lastIndexOf("-") !== 8) return false;
      if (str.length !== 13) return false;
    } else if (str.length !== 11) return false;
  } else {
    if (str.includes("(")) {
      if (str.indexOf("(") !== 0) return false;
      if (str.indexOf(")") !== 4) return false;
      if (str.includes("-")) {
        if (str.indexOf("-") !== 8) return false;
        if (str.length !== 13) return false;
      } else if (str.length !== 12) return false;
    } else if (str.includes("-")) {
      if (str.indexOf("-") !== 3 || str.lastIndexOf("-") !== 7) return false;
      if (str.length !== 12) return false;
    } else if (str.length !== 10) return false;
  }

  return true;
}
