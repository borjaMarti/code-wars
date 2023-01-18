// 5 kyu
// Gap in Primes
// JavaScript:

// The prime numbers are not regularly spaced. For example from 2 to 3 the gap is 1. From 3 to 5 the gap is 2. From 7 to 11 it is 4. Between 2 and 50 we have the following pairs of 2-gaps primes: 3-5, 5-7, 11-13, 17-19, 29-31, 41-43

// A prime gap of length n is a run of n-1 consecutive composite numbers between two successive primes (see: http://mathworld.wolfram.com/PrimeGaps.html).

// We will write a function gap with parameters:

//     g (integer >= 2) which indicates the gap we are looking for

//     m (integer > 2) which gives the start of the search (m inclusive)

//     n (integer >= m) which gives the end of the search (n inclusive)

// In the example above gap(2, 3, 50) will return [3, 5] or (3, 5) or {3, 5} which is the first pair between 3 and 50 with a 2-gap.

// So this function should return the first pair of two prime numbers spaced with a gap of g between the limits m, n if these numbers exist otherwise `nil or null or None or Nothing (or ... depending on the language).

function gap(g, m, n) {
    // For storing previous prime number.
    let prime;

    // Since the only even prime is 2, we optimize the loop by storing 2 if it's the starting number and consequently only checking odd numbers.
    if (m === 2) prime = m;
    if (m % 2 === 0) m++;

    // Loop through provided range.
    for (m; m <= n; m += 2) {
        // If the check is true, it means the number isn't prime and will continue to the rest of the iteration. 
        let check = false;

        // Here we check whether the number is prime. If it's evenly divisible by any odd number, the check is activated and the loop terminated.
        for (let i = 3; i < m; i += 2) {
            if (m % i === 0) {
              check = true;
              break;
            }
        }

        // If the number is prime, we check the gap with the previous prime and return them if it's correct, else we set a new prime.
        if (!check) {
            if (m - prime === g) return [prime, m];
            prime = m;
        }
    }

    // If the loop finishes with no numbers returned, we default to null.
    return null;
}

// Overall very happy with my answer! I started with a simple solution and had to optimize it as much as possible so it could pass all the tests without timing out.

// One optimization I didn't catch (that I also encountered in a previous kata, primesInNumbers, which helped me make use of the "only odds check" optimization):

//   · Biggest possible divider that needs to be checked is √m.

// Thus the loop declaration would look like: 

// for (let i = 3; i * i <= m; i += 2)

// It's much more efficient this way: For example, if we had to check whether 10000 is a prime number, instead of going all the way to 10001, the iteration stops at 101!