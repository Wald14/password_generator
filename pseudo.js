// Pseudo Code

  // DONE Promt user for number (8-128)

  // DONE Validate number
    // DONE greater then 128? Not valid
    // DONE less then 8? Not valid
    // DONE isInt() is false (not a whole number)? Not valid
    // DONE isNaN() is true (not a number)? Not valid

  // DONE Promt user for which characters to include (lowercase, uppercase, numeric, and/or special characters)
    // DONE Confirm lowercase (yes=true, no=false)
    // DONE Confirm uppercase (yes=true, no=false)
    // DONE Confirm numberic (yes=true, no=false)
    // DONE Confirm special characters (yes=true, no=false)

  // DONE Random number generator function that accepts min and max

  // Generate first few characters by making sure each option is picked
    // for (i=0....) if lowercase = true
      // password = password + random letter from lowercase array, otherwise skip
      // password = password + random letter from uppercase array, otherwise skip
      // password = password + random letter from number array, otherwise skip
      // password = password + random letter from special character array, otherwise skip
      // tempPass = numeric value based off current password length OR how many true statments

  // Combine character arrays that are true
    // concat() method will merge two or more arrays and not change the existing arrays
    // array needs to contain all possible options

  // Generate remaining password with combined array
    // for (i=0, i<password.length - 1 - tempPass.length, i++) and have it randomly pull a value from an array
      // array needs to contain all possible options
      // number generator needs to generate a number between 0 and array.length - 1



  // Return password