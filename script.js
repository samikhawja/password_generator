// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowercaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numericalChar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var specialChar = [" ", "!", "\\", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "}", "^", "_", "`", "{", "|", "}", "~"]

// Write password to the #password input
function generatePassword() {
  var password = [];
  var passwordChar = [];
  var passwordLengthUser = prompt("Passwords are between 8-128 characters. How many characters would you like your password to be?")

  // Add event listener to generate button
  
  if (passwordLengthUser <= 7) {
    alert("Password must have 8 or more characters");
    return "";
  }
  
  if (passwordLengthUser >= 129) {
    alert("Password cannot have more than 128 characters");
    return "";
  }
  
  var lcC = confirm("Include lowercase letters?");
  if (lcC) {
    passwordChar = passwordChar.concat(lowercaseChar);
  }
  
  var ucC = confirm("Include uppercase letters?");
  if (ucC) {
    passwordChar = passwordChar.concat(uppercaseChar);
  }
  
  var ncC = confirm("Include numbers?");
  if (ncC) {
    passwordChar = passwordChar.concat(numericalChar);
  }
  
  var scC = confirm("Include special characters?");
  if (scC) {
    passwordChar = passwordChar.concat(specialChar);
  }

  function getRandom(arr) {
    var randomIndex = Math.floor(Math.random() * arr.length);
    var element = arr[randomIndex]
    return element
  }

  for (var i = 0; i < passwordLengthUser; i++) {
    var randomChar = getRandom(passwordChar)
    password.push(randomChar)
    console.log(password)
  }
  return password.join("")
}

function writePassword() {
var password = generatePassword();
var passwordText = document.getElementById("password");
passwordText.value = password;
}

// generateBtn
document.getElementById("generate").addEventListener("click", writePassword);