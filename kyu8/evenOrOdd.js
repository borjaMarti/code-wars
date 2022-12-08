// 8 kyu
// Even or Odd
// JavaScript:

// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function evenOrOdd(number) {
  number = Number(number);
  if (number === 0 || number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}