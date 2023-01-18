// 5 kyu
// Primes in numbers
// JavaScript:

// Given a positive number n > 1 find the prime factor decomposition of n. The result will be a string with the following form :

//  "(p1**n1)(p2**n2)...(pk**nk)"

// with the p(i) in increasing order and n(i) empty if n(i) is 1.

// Example: n = 86240 should return "(2**5)(5)(7**2)(11)"

function primeFactors(n){
    let factors = new Map();
    let answer = ``;
    
    for (let i = 2; n !== 1; i++) {
        if (n % i === 0) {
            factors.has(i) ? factors.set(i, factors.get(i) + 1) : factors.set(i, 1);
            n /= i;
            i = 1;
        }
    }
  
    for (let prime of factors.entries()) {
        prime[1] === 1 ? 
        answer += `(${prime[0]})` : 
        answer += `(${prime[0]}**${prime[1]})`;
    }
  
    return answer;
}

// Could have also directly returned the entries without the answer declaration by using spread syntax + map iteration on them:

// return [...factors.entries()].map(prime => 
//                                      prime[1] === 1 ? 
//                                      `(${prime[0]})` : 
//                                      `(${prime[0]}**${prime[1]})`)
//                              .join('');

// I also liked this implementation. Instead of using a map, it declares a counting variable inside the loop:

// function primeFactors(n){
// 	for (let i = 2, answer = '', count; i <= n; i++) {
//         count = 0;
        
//         while (n % i === 0) {
//             count++;
//             n /= i;
//         }
        
//         answer += count ? `(${count > 1 ? i + '**' + count : i})` : '';
//     }
  
//   return answer;
// }

// Also, if we wanted to add a failsafe in case the number is 1, we could use something like:

// return answer || `(${n})`;

// Possible optimization I found in the answers:

// No need to check for even numbers after 2.
// Biggest possible divider that needs to be checked is √n.

// It could be implemented like this:

// while (n > 1) {
//     if (n % 2 == 0) {
//         answer.push(2);
//         n /= 2;
//         continue;
//     }
    
//     const limit = Math.floor(Math.sqrt(rem));

//     for (let i = 3; i <= limit; i += 2) {
//       if (n % i == 0) {
//         factors.push(i);
//         n /= i;
//         break;
//       }
//     }
    
//     if (i >= limit) {
//       answer.push(n);
//       n = 1;
//     }
// }