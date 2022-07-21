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
  var pwLength ; // Length of password 8 to 128 characters is valid
  var lowercaseBool ; // boolean for including lowercase characters
  var uppercaseBool ; // boolean for including uppercase characters
  var numericBool ; // boolean for including numeric characters
  var specialBool ; // boolean for including special characters

  

}
