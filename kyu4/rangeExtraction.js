// 4 kyu
// Range Extraction
// JavaScript:

// A format for expressing an ordered list of integers is to use a comma separated list of either

//   ·  individual integers
//   ·  or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17"

// Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.

// solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// returns "-10--8,-6,-3-1,3-5,7-11,14,15,17-20"


function solution(list) {
    let previousNumber = list[0];
    let currentInterval = [list[0]];
    
    list.shift();

    let rangeFormat = [];
    let pushCurrentInterval = () => {
        switch(currentInterval.length) {
            case 1:
                rangeFormat.push(currentInterval[0]);
                break;
            case 2:
                rangeFormat.push(currentInterval[0]); 
                rangeFormat.push(currentInterval[1]);
                break;
            default:
                rangeFormat.push(`${currentInterval[0]}-${currentInterval[currentInterval.length - 1]}`);
        }
    };

    for (let number of list) {
        if (previousNumber + 1 === number) currentInterval.push(number);
        else {
            pushCurrentInterval();
            currentInterval = [];
            currentInterval.push(number);
        }
      
        previousNumber = number;  
    }
    
    pushCurrentInterval();
    
    return rangeFormat.join(',');
}

// Clean implementation:

// function solution(list) {
//     return list.reduce((acc,curr,i) => {
//         // Start the accumulator string with the first number.
//         if (i==0) return curr.toString();
//         // If previous number and next number are adjacent, don't modify the string.
//         if (list[i-1] == curr-1 && list[i+1] == curr+1) return acc;
//         // If previous number and the one before are adjacent, add range ending.
//         if (list[i-2] == curr-2 && list[i-1] == curr-1) return acc+"-"+curr;
//         // Else, add a new number.
//         return acc+","+curr;
//     });
// }