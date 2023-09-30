// STARTER CODE (DONT CHANGE) Assignment Code
var generateBtn = document.querySelector("#generate");

// STARTER CODE (DONT CHANGE) Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// STARTER CODE (DONT CHANGE) Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// MY CODE BELOW


// Establishing Global Variables
var numberOfChars;
var lowerCase;
var upperCase;
var numeric;
var specialChars;

// Establishing Global Arrays
var lowerArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numericArray = [0, 1, 2, 3, 4, 5, 6, 7, 8 , 9]
var specialCharArray = [" ","!",'"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\u{005C}", "]", "^", "_", "`", "{", "|", "}", "~"]

// Establishing a Global Master Array that is blank by default
var masterArray = []

// Promt user for password length
function howManyChars(){
  numberOfChars = prompt("How many characters do you want your password to have?");

  // Converts user promted string and converts to a number
  numCheck = Number(numberOfChars);

  // Validates if numberOfChars to meet criteria
  if (numberOfChars === null){
    return false;

  } else if (isNaN(Number(numCheck)) || Number.isInteger(numCheck) === false || numCheck > 128 || numCheck < 8 ) {
    alert(`${numberOfChars} is not valid number. Make sure the number is a digit that is equal to or between 8 and 128. Please try again`)
    return false;

  // If valid, returns the user's number
  } else {
    return numCheck;
  }
}


// Prompt user for character type and if yes, add to master array.
function charType() {
  masterArray = [];
  lowerCase = confirm("Do you want to include lowercase letters?");
  if (lowerCase === true) {
    masterArray = masterArray.concat(lowerArray);
  }
  upperCase = confirm("Do you want to include uppercase letters?");
  if (upperCase === true) {
    masterArray = masterArray.concat(upperArray);
  }
  numeric = confirm("Do you want to include numeric values?");
  if (numeric === true) {
    masterArray = masterArray.concat(numericArray);
  }
  specialChars = confirm("Do you want to include special characters?");
  if (specialChars === true) {
    masterArray = masterArray.concat(specialCharArray);
  }
  if (lowerCase === false && upperCase === false && numeric === false && specialChars === false) {
    alert("You must select at least one character type. Please select again.");
    charType();
  }
}


// Random Number Generator that accepts a min and max value. Usually 0 and either string.length - 1 OR array.length - 1.
function generateRandomNumber(min,max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}


// Adds one character to the start of the password for each type wanted
function passwordStart() {
  var tempPassword = ""
  if (lowerCase === true) {
    tempPassword += lowerArray[generateRandomNumber(0, lowerArray.length - 1)]
  }
  if (upperCase === true) {
    tempPassword += upperArray[generateRandomNumber(0, upperArray.length - 1)]
  }
  if (numeric === true) {
    tempPassword += numericArray[generateRandomNumber(0, numericArray.length - 1)]
  }
  if (specialChars === true) {
    tempPassword += specialCharArray[generateRandomNumber(0, specialCharArray.length - 1)]
  }
  return tempPassword;
}


// Generates the remaining characters of the password, using the master array built from user selections
function passwordEnd(charsNeeded) {
  var tempPassword = ""
  for ( i = 0; i < charsNeeded; i++) {
    tempPassword += masterArray[generateRandomNumber(0, masterArray.length - 1)]
  }
  return tempPassword;
}

// Generate Password
function generatePassword(){

  // promt user for password length
  var userPromt = howManyChars();

  // if user "cancels", no password generatered
  if (userPromt === false) {
    return "";
  }

  // promt user for character types and build master character array
  charType();

  // Add one type of each character to the start of the password
  var start = passwordStart();

  // Finish remaining password
  var end = passwordEnd(numberOfChars - start.length);

  // Return full password
  var password = start + end;
  return password;
}