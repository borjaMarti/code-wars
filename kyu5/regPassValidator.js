// 5 kyu
// Regex Password Validation
// JavaScript:

// You need to write regex that will validate a password to make sure it meets the following criteria:

//     At least six characters long
//     contains a lowercase letter
//     contains an uppercase letter
//     contains a digit
//     only contains alphanumeric characters (note that '_' is not alphanumeric)

const REGEXP = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])^[0-9a-zA-Z]{6,}$/;

//(?=.*[0-9]) - positive look ahead to see if at least one digit exists (could be \d instead of [0-9]).
//(?=.*[a-z]) - same for lowercase letter.
//(?=.*[A-Z]) - same for uppercase letter.
//^ - beginning of the string
//[0-9a-zA-Z]{6,} - character matches any alphanumeric character, at least six times.
//$ - end of the string.
