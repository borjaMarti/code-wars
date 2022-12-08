// 8 kyu
// Convert boolean values to strings 'Yes' or 'No'.
// JavaScript:

//  Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

function boolToWord( bool ){
    if (bool === true) {
        return "Yes";
    } else if (bool === false) {
        return "No";
    }
}