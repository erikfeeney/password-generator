// Assignment code here
const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

  // Function to generate a random password
function generatePassword() {
  let password = "";
  let passwordLength = 0;
  let includeLowercase = false;
  let includeUppercase = false;
  let includeNumbers = false;
  let includeSymbols = false;

  while (true) {
    passwordLength = parseInt(prompt("Enter the length of your password between 8 and 128 characters:"));
    if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
      alert("Please enter a password length between 8 and 128 characters");
      continue;
    }

    includeLowercase = confirm("Do you want to include lowercase letters in your password?");
    includeUppercase = confirm("Do you want to include uppercase letters in your password?");
    includeNumbers = confirm("Do you want to include numbers in your password?");
    includeSymbols = confirm("Do you want to include special characters in your password?");

    if (!includeLowercase && !includeUppercase && !includeNumbers && !includeSymbols) {
      alert("Please select one option for password to generate");
      continue;
    }

    break;
  }

  let characterSet = "";
  if (includeLowercase) {
    characterSet += lowercaseLetters;
  }
  if (includeUppercase) {
    characterSet += uppercaseLetters;
  }
  if (includeNumbers) {
    characterSet += numbers;
  }
  if (includeSymbols) {
    characterSet += symbols;
  }
  for (let i = 0; i < passwordLength; i++) {
    password += characterSet.charAt(Math.floor(Math.random() * characterSet.length));
  }

  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);