// 5 kyu
// A Chain adding function
// JavaScript

// We want to create a function that will add numbers together when called in succession.

// add(1)(2); // == 3

// We also want to be able to continue to add numbers to our chain.

// add(1)(2)(3); // == 6
// add(1)(2)(3)(4); //  == 10
// add(1)(2)(3)(4)(5); // == 15

// and so on.

// A single call should be equal to the number passed in.

// add(1); // == 1

// We should be able to store the returned values and reuse them.

// var addTwo = add(2);
// addTwo; // == 2
// addTwo + 5; // == 7
// addTwo(3); // == 5
// addTwo(3)(5); // == 10

// We can assume any number being passed in will be valid whole number.

function add(n) {
  function _partial(nextN) {
    return add(n + nextN);
  }

  _partial.valueOf = function () {
    return n;
  };

  return _partial;
}

// I was familiar with currying, but only applied to functions with a finite number of parameters, so this was a fun problem to try to solve. I had to use my solution-finding skills for this though. I didn't know about the valueOf method, good to add to my toolbelt. Also enjoyed the recursive aspect
