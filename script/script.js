const { tsConstructSignatureDeclaration } = require("@babel/types");

// Assignment Code
var generateBtn = document.querySelector("#generate");

var pAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var pNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var pSpecial = [
  "+", "-", "&&", "||", "!", "(",
  ")", "{", "}", "[", "]", "^",
  "~", "*", "?", ":","\"","\\"];

var iLength = prompt("Please select your password length? (must be between 8 and 128 characters)");
var iUpper = prompt("Do you want to include upper case letters?");
var iLower = prompt("Do you want to include lower case letters?");
var iNumbers = prompt("Do you want to include numbers?");
var iSpecial = prompt("Do you want to include special characters?");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



function generatePassword() {

}

// Prompt user to select from a series of criteria, including:
// Select OK vs Cancel (prompt)
// Alert password length (between 8 and 128 characters)
// prompt lowercase
// prompt uppercase
// prompt numeric
// prompt special characters
// validate each input
// at least one character type should be selected
// generate a pasword that matches the selected criteria
// display the password in an alert or written to the page