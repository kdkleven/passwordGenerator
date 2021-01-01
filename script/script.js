//const { tsConstructSignatureDeclaration } = require("@babel/types");

// Assignment Code


//PSUEDOCODE - ACCEPTANCE CRITERIA
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
// randomly generate password 
// 
// display the password in an alert or written to the page

var generateBtn = document.querySelector("#generate");


//Array of letters for lowercase and uppercase (with toUpper) criteria
var arrAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//Array of numbers for numeric criteria
var arrNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
//Array of special characters for spec.char. criteria
var arrSpecChar = [
  "+", "-", "&&", "||", "!", "(",
  ")", "{", "}", "[", "]", "^",
  "~", "*", "?", ":", "\"", "\\"];

  var pwdProfile = {
    "length": 0,
    "upperCase": true,
    "lowerCase": false,
    "numbers": true,
    "specChar": true,

    pwdLength: function () {
      this.length = parseInt(prompt("Choose your password length (must be between 8 and 128 characters"));
    },

    pwdUpperCase: function () {
      this.upperCase = confirm("Do you want to include upper case letters?");
    },

    pwdLowerCase: function () {
      this.lowerCase = confirm("Do you want to include lower case letters?");
    },

    pwdNumbers: function () {
      this.numbers = confirm("Do you want to include numbers?");
    },

    pwdSpecChar: function () {
      this.specChar = confirm("Do you want to include special characters?");
    }
  };

function reWriteProfile() {
  console.log("length: " + pwdProfile.length);
  console.log("upper case: " + pwdProfile.upperCase);
  console.log("lower case: " + pwdProfile.lowerCase);
  console.log("numbers: " + pwdProfile.numbers);
  console.log("spec char: " + pwdProfile.specChar);
  console.log("--------------------------------");
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



function generatePassword() {
  pwdProfile.pwdLength();
  pwdProfile.pwdUpperCase();
  pwdProfile.pwdLowerCase();
  pwdProfile.pwdNumbers();
  pwdProfile.pwdSpecChar();  
  reWriteProfile();
};

