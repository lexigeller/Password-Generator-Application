// Assignment Code
var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialChars = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  }

function generatePassword() {
  var passwordLength = prompt("How long would you like your password to be?")
  var includeLowercaseLetters = confirm("Would you like to include lowercase letters?")
  var includeUppercaseLetters = confirm("Would you like to include uppercase letters?")
  var includeNumbers = confirm("Would you like to include numbers?")
  var includeSpecChars = confirm("Would you like to include special characters?")
  
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password must be between 8 and 128 characters.");
    return "";
  } else {
    var password = "";
    var characters = "";
  }

  if (includeLowercaseLetters=true) {
    characters += lowercaseLetters;
  }

  if (includeUppercaseLetters=true) {
    characters += uppercaseLetters;
  }

  if (includeNumbers=true) {
    characters += numbers;
  }

  if (includeSpecChars=true) {
    characters += specialChars;
  }

  for (var i = 0; i <passwordLength; i++) {
    password += characters.charAt(Math.floor(Math.random() * characters.length))
  }

  return password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
