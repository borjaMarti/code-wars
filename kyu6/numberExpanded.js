// 6 kyu
// Write Number in Expanded Form
// JavaScript:

// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'

// NOTE: All numbers will be whole numbers greater than 0.

function expandedForm(num) {
  return num
    .toString()
    .split("")
    .map((digit, index, array) => {
      if (digit === "0") return;
      return `${index === 0 ? "" : " + "}${
        10 ** (array.length - 1 - index) * digit
      }`;
    })
    .join("");
}
