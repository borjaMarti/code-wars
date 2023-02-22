// 5 kyu
// The Hashtag Generator
// JavaScript:

// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

//   ·  It must start with a hashtag (#).
//   ·  All words must have their first letter capitalized.
//   ·  If the final result is longer than 140 chars it must return false.
//   ·  If the input or the result is an empty string it must return false.

// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

function generateHashtag(str) {
    // Check whether str is empty.
    if (!str.trim()) return false;
    // Check whether the final result (with no spaces) will be over 140 characters long.
    if (str.split('').filter( elem => elem.trim() ).length > 139) return false;
    // Return the final string by splitting each word separated by a space as an element of an array, 
    // capitalizing the first letter (via array splitting), then rejoining them with the hashtag sign.
    return '#' + str.split(' ')
                    .map( elem => elem.split('')
                                      .map( (elem, i) => {
                                          if (i === 0) return elem.toUpperCase();
                                          else return elem.toLowerCase();
                                      }).join('')
                    ).join('');
}