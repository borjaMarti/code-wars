// 7 kyu
// Credit Card Mask
// JavaScript:

// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen.Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// "4556364607935616" --> "############5616"
//      "64607935616" -->      "#######5616"
//                "1" -->                "1"
//                 "" -->                 ""

// "Skippy" --> "##ippy"
// "Nananananananananananananananana Batman!" --> "####################################man!"

function maskify(cc) {
  let answer = "";

  for (let i = 0; i < cc.length; i++) {
    if (i > cc.length - 5) {
      answer += cc[i];
    } else answer += "#";
  }

  return answer;
}

// Simpler implementation:

// function maskify(cc) {
//   return cc.slice(-4).padStart(cc.length, "#");
// }
