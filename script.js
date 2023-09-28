// Assignment Code
var generateBtn = document.querySelector("#generate");

// Specs
// 8-128 characters
// Lowercase (y/n)
// Uppercase (y/n)
// Numeric (y/n)
// Special Characters (y/n)
// Make sure to use at least one character type of each
// Combine arrays????????

// Establishing Global Variables
var numberOfChars;
var lowerCase;
var upperCase;
var numeric;
var specialChars;

// Promts user for how many chartacters
// Confirms confirms the input was a number
// Confirms that the number is between 8-128.
// TODO: CONFIRM THAT IT IS A WHOLE NUMBER
// function howManyChars(){
//   numberOfChars = prompt("How many characters do you want your password to have?");

//   numCheck = Number(numberOfChars);

//   if (isNaN(numCheck)) {
//     alert(`${numberOfChars} is not valid number, please try again`)

//   } else if (numberOfChars > 128 || numberOfChars < 8){
//     alert(`Password needs to be at least 8 characters and no more than 128, please try again`)

//   } else if (Number.isInteger(numCheck) === false){
//     alert(`Password needs to be a whole number, please try again`)

//   } else {
//     numberOfChars = numCheck;
//     console.log("Length is between 8 and 128")
//     console.log(`The number of characters selected was ${numCheck}`)
//     return numberOfChars;
//   }
// }

// function howManyChars(){
//   numberOfChars = prompt("How many characters do you want your password to have?");

//   numCheck = Number(numberOfChars);

//   if ( isNaN(Number(numberOfChars)) || Number.isInteger(numCheck) === false || numberOfChars > 128 || numberOfChars < 8 ) {
//     alert(`${numberOfChars} is not valid number. Make sure the number is a digit that is equal to or between 8 and 128. Please try again`)

//   } else {
//     numberOfChars = numCheck;
//     console.log(`The number of characters selected was ${numCheck}`)
//     return numberOfChars;
//   }
// }


function howManyChars(){
  numberOfChars = prompt("How many characters do you want your password to have?");

  // Converts user promted string and converts to a number
  numberOfChars = Number(numberOfChars);

  // Validates if numberOfChars to meet criteria
  if ( isNaN(Number(numberOfChars)) || Number.isInteger(numberOfChars) === false || numberOfChars > 128 || numberOfChars < 8 ) {
    alert(`${numberOfChars} is not valid number. Make sure the number is a digit that is equal to or between 8 and 128. Please try again`)

  } else {
    console.log(`The number of characters selected was ${numberOfChars}`)
    return numberOfChars;
  }
}


// Function to confirm boolean values
function charTypeConfirmations(){
  lowerCase = confirm("Do you want to include lowercase letters?");
  console.log(`Lowercase letter: ${lowerCase}`);
  upperCase = confirm("Do you want to include uppercase letters?");
  console.log(`Uppercase letter: ${upperCase}`);
  numeric = confirm("Do you want to include numeric values?");
  console.log(`Numeric values: ${numeric}`);
  specialChars = confirm("Do you want to include special characters?");
  console.log(`Special characters: ${specialChars}`);
}


// TODO: Generate Password
// Currently outputs the input values
function generatePassword(){
  password = howManyChars();
  return password;
}





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
