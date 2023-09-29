// DONT CHANGE Assignment Code
var generateBtn = document.querySelector("#generate");



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
    return numberOfChars;
  }
}


// Set appropriate boolean value based on if the user wants characters from said array or not.
function charTypeConfirmations(){
  lowerCase = confirm("Do you want to include lowercase letters?");
  upperCase = confirm("Do you want to include uppercase letters?");
  numeric = confirm("Do you want to include numeric values?");
  specialChars = confirm("Do you want to include special characters?");
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

// Adds the selected character arrays into a master array to be used by the endPassword() funciton
function addArraysToMaster() {
  masterArray = [];
  if (lowerCase === true) {
    masterArray = masterArray.concat(lowerArray);
  }
  if (upperCase === true) {
    masterArray = masterArray.concat(upperArray);
  }
  if (numeric === true) {
    masterArray = masterArray.concat(numericArray);
  }
  if (specialChars === true) {
    masterArray = masterArray.concat(specialCharArray);
  }
  console.log(masterArray)
}


function passwordEnd(charsNeeded) {
  var tempPassword = ""
  for ( i = 0; i < charsNeeded; i++) {
    tempPassword += masterArray[generateRandomNumber(0, masterArray.length - 1)]
  }
  return tempPassword;
}



// Generate Password
function generatePassword(){
  userPromt = howManyChars();
  if (userPromt === false) {
    return;
  }
  charTypeConfirmations();
  addArraysToMaster();
  start = passwordStart();
  end = passwordEnd(numberOfChars - start.length);
  var password = start + end;
  return password;
}


// DONT CHANGE Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// DONT CHANGE Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
