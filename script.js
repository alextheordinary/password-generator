// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  // Variables for criteria prompts
  var pwLength = 0; // Length of password 8 to 128 characters is valid
  var lowercaseBool = false; // boolean for including lowercase characters
  var uppercaseBool = false; // boolean for including uppercase characters
  var numericBool = false; // boolean for including numeric characters
  var specialBool = false; // boolean for including special characters

  // Variables for valid characters for each type
  var lowercaseString = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericString = "1234567890";
  var specialString = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  // String for storing characters available for use in generation
  var availableCharacters = "";
  // Array of available characters for random generation
  var availableArray;
  // password string that will store random characters and be returned at end
  var passwordString = "";
  var randomAvailableIndex; // random index value of availableArray
  var conditionsMet = false;

  // keep looping until parameter conditions are met or cancel is selected on password length prompt
  while (conditionsMet === false) {

    // Prompt for password length 
    pwLength = prompt("Enter a password length between 8 and 128 characters:");

    // Check for null value and return if null

    if (pwLength === null) {
      return '';
    }

    pwLength = Number(pwLength);  // Converting length to a number

    // Check if it's a number between 8 and 128
    // If true, continue with prompts. Otherwise, alert and reprompt for length

    if ((pwLength >= 8) && (pwLength <= 128)) {
      // Prompt for parameters
      lowercaseBool = confirm("Include lowercase characters?");
      uppercaseBool = confirm("Include uppercase characters?");
      numericBool = confirm("Include numeric characters?");
      specialBool = confirm("Include special characters?");

      // Check to see if at least 1 parameter is true. Continue if true else alert and restart process
      if (lowercaseBool || uppercaseBool || numericBool || specialBool) {
        conditionsMet = true;
        // Concatenate characters to availableCharacters string if its boolean is true
        if (lowercaseBool) {
          availableCharacters = availableCharacters.concat(lowercaseString);
        }
        if (uppercaseBool) {
          availableCharacters = availableCharacters.concat(uppercaseString);
        }
        if (numericBool) {
          availableCharacters = availableCharacters.concat(numericString);
        }
        if (specialBool) {
          availableCharacters = availableCharacters.concat(specialString);
        }
        // Put available characters set into an array
        availableArray = availableCharacters.split('');

        // Use a for loop to generate password
        // Will run from 0 until it hits the value of pwLength variable
        // Each character in the string will be randomly selected from availableCharacters array

        for (var i = 0; i < pwLength; i++) {
          randomAvailableIndex = Math.floor(Math.random() * availableArray.length);
          passwordString = passwordString.concat(availableArray[randomAvailableIndex]);
        }
        // Returns the password string to whatever called this function
        return passwordString;
      } else {
        alert("At least one character type must be selected");
      }
    } else {
      alert("Password length must be a number between 8 and 128");
    }
  }
}