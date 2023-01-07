// 6 kyu
// The Supermarket Queue
// JavaScript:

// There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

// inputs:

//   ·  customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
//   ·  n: a positive integer, the number of checkout tills.

// output:

// The function should return an integer, the total time required.

// queueTime([5,3,4], 1)
// // should return 12
// // because when there is 1 till, the total time is just the sum of the times

// queueTime([10,2,3,3], 2)
// // should return 10
// // because here n=2 and the 2nd, 3rd, and 4th people in the 
// // queue finish before the 1st person has finished.

// queueTime([2,3,10], 2)
// // should return 12

//   ·  There is only ONE queue serving many tills, and
//   ·  The order of the queue NEVER changes, and
//   ·  The front person in the queue (i.e. the first element in the array/list) proceeds to a till as soon as it becomes free.

// N.B. You should assume that all the test input will be valid, as specified above.

// P.S. The situation in this kata can be likened to the more-computer-science-related idea of a thread pool, with relation to running multiple processes at the same time: https://en.wikipedia.org/wiki/Thread_pool

function queueTime(customers, n) {
    if (!customers[0]) return 0;  
  
    let queue = customers.slice(0, n);

    customers.slice(n, customers.length).forEach( customer => {
        queue[queue.indexOf(Math.min(...queue))] += customer;
    });

    return Math.max(...queue);
}

// Originally my implementantion created the initial queue using a loop n times, but I noticed I could make it simpler by using Array.slice:

// let queue = [];
    
// for (let i = 0; i < n; i++){
//     queue.push(customers[i]);
// }
    
// customers = customers.slice(n, customers.length);

// And the till selection and final time were calculated through Array.sort, which if I'm correct has more complexity than the method I ended up using, Math.max and min:

// customers.forEach( customer => {
//     queue.sort((a,b) => a - b );
//     queue[0] += customer;
// })

// queue.sort( (a, b) => b - a);

// return queue[0];

// Similar solution, but creates an array with new and then fills the empty indexes with 0.

// function queueTime(customers, n) {
//     let tills = new Array(n).fill(0);

//     customers.forEach( customer => {
//         let till = tills.indexOf(Math.min(...tills));
//         tills[till] += customer;
//     });

//     return Math.max(...tills);
// }