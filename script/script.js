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

var alphabet = "abcdefghijklmnopqrstuvqxyz";
var numeric = '0123456789';
var specChar = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
var character = "";

var pwdProfile = {
  length: 0,
  upperCase: true,
  lowerCase: false,
  numbers: true,
  specChar: true,
  userPassword: "",

  pwdLength: function (newLength) {
    newLength = parseInt(prompt("Choose your password length (must be between 8 and 128 characters"));
    
    while (newLength < 8 || newLength > 128) {
      newLength = parseInt(prompt("Choose your password length (must be between 8 and 128 characters"));
    }
    alert("You chose a password length of " + newLength + " characters.");  
    this.length = newLength;
    //console.log(this.length);
    return(newLength);
  },

  pwdUpperCase: function () {
    this.upperCase = confirm("Do you want to include upper case letters?");
    password1 = Math.ceil(toUpper(alphabet.length) * Math.random()*Math.random());
  },

  pwdLowerCase: function () {
    this.lowerCase = confirm("Do you want to include lower case letters?");
    password2 = Math.ceil(alphabet.length * Math.random()*Math.random());
  },

  pwdNumbers: function () {
    this.numbers = confirm("Do you want to include numbers?");
    password3 = Math.ceil(numeric.length * Math.random()*Math.random());
  },

  pwdSpecChar: function () {
    this.specChar = confirm("Do you want to include special characters?");
    password4 = Math.ceil(specChar.length * Math.random()*Math.random());
  }
};
        
//userPassword = Math.floor(Math.random() * pwdProfile.length)

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  console.log("length: " + pwdProfile.length);
  console.log("upper case: " + pwdProfile.upperCase);
  console.log("lower case: " + pwdProfile.lowerCase);
  console.log("numbers: " + pwdProfile.numbers);
  console.log("spec char: " + pwdProfile.specChar);
  console.log("--------------------------------");


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



function generatePassword() {
  pwdProfile.pwdLength();
  pwdProfile.pwdUpperCase();
  pwdProfile.pwdLowerCase();
  pwdProfile.pwdNumbers();
  pwdProfile.pwdSpecChar();
  writePassword();
}

