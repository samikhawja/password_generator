// Assignment Code
var generateBtn = document.querySelector("#generate");

var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz"
var numericalChar = "0123456789"
var specialChar = " !\"#$%&'()*+,-./:;<=>?@[\]}^_`{|}~"

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;



  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);

  if (passwordLengthUser <= 8) {
    alert("Password must have 8 or more characters");
    return "";
  }

  if (passwordLengthUser >= 128) {
    alert("Password cannot have more than 128 characters");
    return "";
  }

  var lowercaseCharacterChoice = confirm("Include lowercase letters?");

  if (lowercaseCharacterChoice) {
    passwordChar += lowercaseChar;
  }

  var uppercaseCharacterChoice = confirm("Include uppercase letters?");

  if (uppercaseCharacterChoice) {
    passwordChar += uppercaseChar;
  }

  var numericalCharacterChoice = confirm("Include numbers?");

  if (numericalCharacterChoice) {
    passwordChar += numericalChar;
  }

  var specialCharacterChoice = confirm("Include special characters?");

  if (specialCharacterChoice) {
    passwordChar += specialChar;
  }
}
