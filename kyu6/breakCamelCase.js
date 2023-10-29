// 6 kyu
// Break camelCase
// JavaScript:

// Complete the solution so that the function will break up camel casing, using a space between words.

// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

function solution(string) {
  let broken = "";

  for (let c of string) {
    if (c === c.toUpperCase()) broken += ` ${c}`;
    else broken += c;
  }

  return broken;
}

// Alternative solution involving array transformation, might be less performant:

// function solution(string) {
//   return string
//     .split("")
//     .map((c) => {
//       return c === c.toUpperCase() ? ` ${c}` : c;
//     })
//     .join("");
// }
