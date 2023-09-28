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

// Functions to determine how many chartacters
// Confirm confirm the input was a number 
// TODO: Needs to confirm that the number is between 8-128.
function howManyChars(){
  numberOfChars = prompt("How many characters do you want your password to have?");

  numCheck = Number(numberOfChars);
  console.log(typeof(numCheck))

  if (isNaN(numCheck)) {
    alert(`${numberOfChars} is not valid number, please try again`)
  } else {
    numberOfChars = numCheck;
    console.log(`The number of characters selected was ${numCheck}`)
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
