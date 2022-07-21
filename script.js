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
  var pwLength; // Length of password 8 to 128 characters is valid
  var lowercaseBool; // boolean for including lowercase characters
  var uppercaseBool; // boolean for including uppercase characters
  var numericBool; // boolean for including numeric characters
  var specialBool; // boolean for including special characters

  // Variables for valid characters for each type
  var lowercaseString = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericString = "1234567890";
  var specialString = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  // String for storing characters available for use in generation
  var availableCharacters = "" ; 
  // Array of available characters for random generation
  var availableArray ;
  // password string that will store random characters and be returned at end
  var passwordString ; 
  var randomAvailableIndex ; // random index value of availableArray
  
  // Prompt for password length 
  pwLength = prompt("Enter a password length between 8 and 128 characters:");

  // Check for null value and return if null

  if (pwLength === null) {
    return;
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
      // Concatenate characters to availableCharacters string if its boolean is true
      if (lowercaseBool) {
        availableCharacters = availableCharacters.concat(lowercaseString) ;
      }
      if (uppercaseBool) {
        availableCharacters = availableCharacters.concat(uppercaseString) ;
      }
      if (numericBool) {
        availableCharacters = availableCharacters.concat(numericString) ;
      }
      if (specialBool) {
        availableCharacters = availableCharacters.concat(specialString) ;
      }
    } else {
      alert("At least one character type must be selected") ;
      generatePassword() ;
    }
    // Put character set into an array
    availableArray = availableCharacters.split('') ;
  } else {
    alert("Password length must be a number between 8 and 128");
    generatePassword();
  }


}
