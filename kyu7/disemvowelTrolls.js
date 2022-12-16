// 7 kyu
// Disemvowel Trolls
// JavaScript:

// Trolls are attacking your comment section!
// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
// Your task is to write a function that takes a string and return a new string with all vowels removed.
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

function disemvowel(str) {
  
    let arr = str.split('');
    
    arr.forEach( (element, index) => {
        element.toLowerCase();
      
        if (element.toLowerCase() === 'a' || element.toLowerCase() === 'e' || element.toLowerCase() === 'i' || element.toLowerCase() === 'o' || element.toLowerCase() === 'u') {
        arr[index] = '';
        }
    });      
                
    return arr.join('');
}

// Simpler solution:

// function disemvowel(str) {
//     return str.replace(/[aeiou]/gi, '');
// }