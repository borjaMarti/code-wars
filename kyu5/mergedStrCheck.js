// 5 kyu
// Merged String Checker
// JavaScript

// At a job interview, you are challenged to write an algorithm to check if a given string, s, can be formed from two other strings, part1 and part2.

// The restriction is that the characters in part1 and part2 should be in the same order as in s.

// The interviewer gives you the following example and tells you to figure out the rest from the given test cases.

// 'codewars' is a merge from 'cdw' and 'oears':

//     s:  c o d e w a r s   = codewars
// part1:  c   d   w         = cdw
// part2:    o   e   a r s   = oears

function isMerge(s, part1, part2) {
    let sCheck = [...s];
    let merge = part1 + part2;

    // This loop ensures s shares exactly the same characters with parts 1 and 2 before proceeding.
    for (let c of merge) {
      if (sCheck.indexOf(c) === -1) return false;
      sCheck[sCheck.indexOf(c)] = false;
    }
    
    let index = 0;
    let check = Array.from(s, x => false);
    
    // These loops check that the characters of each part are ordered correctly.
    for (let c of part1) {
      // Index starts at 0, and reassigns itself after the character's position in s.
      index = s.indexOf(c, index) + 1;
      // The corresponding position in the check array is set to true.
      check[index - 1] = true;
    }

    // Index reset for part2 check.
    index = 0;
    
    for (let c of part2) {
      index = s.indexOf(c, index) + 1;
      let position = index;
      // With our second loop, we'll have to also check whether check's postions have already been toggled.
      while( check[index - 1] ) {
        // We try to find the next character's position that is set to false.
        index = s.indexOf(c, index) + 1;
        // If the position doesn't exist, we exit the loop.
        if (index === 0) return false;
      }
      check[index - 1] = true;
      // We reset the index for the next character.
      index = position;
    }
    
    // If all of the check's positions have been turned true, the test passes.
    return check.every(x => x);
  }
  
// Recursive implementation:

// function isMerge(s, part1, part2) {
//     return !s ? !(part1 || part2) :
//       s[0] == part1[0] && isMerge(s.slice(1), part1.slice(1), part2) ||
//       s[0] == part2[0] && isMerge(s.slice(1), part1, part2.slice(1));
// }