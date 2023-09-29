// Assignment Code
var generateBtn = document.querySelector("#generate");

// Establishing Global Variables
var numberOfChars;
var lowerCase;
var upperCase;
var numeric;
var specialChars;

// Promts user for how many characters
function howManyChars(){
  numberOfChars = prompt("How many characters do you want your password to have?");

  // Converts user promted string and converts to a number
  numberOfChars = Number(numberOfChars);

  // Validates if numberOfChars to meet criteria
  if ( isNaN(Number(numberOfChars)) || Number.isInteger(numberOfChars) === false || numberOfChars > 128 || numberOfChars < 8 ) {
    alert(`${numberOfChars} is not valid number. Make sure the number is a digit that is equal to or between 8 and 128. Please try again`)
    return false;

  // If valid, returns the user's number
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




// TODO: Generate Password - Currently outputs the input value
function generatePassword(){
  userPromt = howManyChars();
  if (userPromt === false) {
    return;
  }

  password = userPromt + "password";
  charTypeConfirmations();
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
