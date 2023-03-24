// 4 kyu
// Human readable duration format
// JavaScript:

// Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

// The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

// It is much easier to understand with an example:

// * For seconds = 62, your function should return 
//     "1 minute and 2 seconds"
// * For seconds = 3662, your function should return
//     "1 hour, 1 minute and 2 seconds"

function formatDuration (seconds) {
    if (seconds === 0) return 'now';
  
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);
    let years = Math.floor(days / 365);

    let response = [ [years, 'year'], [days % 365, 'day'], [hours % 24, 'hour'], [minutes % 60, 'minute'], [seconds % 60, 'second'] ];
    
    // Filter: Only return elements whose value > 0
    return response.filter( elem => elem[0] ? elem : '')
    // Map: If value > 1, use the units' plural
                   .map( elem => {
                       if (elem[0] > 1) {
                           return `${elem[0]} ${elem[1]}s`;
                       }
                        
                       return `${elem[0]} ${elem[1]}`;    
                   })
    // Map: Depending on the number of elements, add punctuation and connectors
                   .map( (elem, i, array) => {
                       if (array.length > 1) {
                           if (i === array.length - 1) return ` and ${elem}`;
                           if (i !== array.length - 2) return `${elem}, `;
                       }
                   
                       return elem;
                   })
    // Join: Return string
                   .join('');
}

// After looking through other people's solutions, I'm pretty happy with my implementation. I didn't see any that were outright better, and I consider mine easily understandable.