
// Declare a variable for the #generate ID
var generateBtn = document.querySelector("#generate");

// Declare variables containing all letters, numbers, and symbols
var letters = 'abcdefghijklmnopqrstuvqxyz';
var numbers = '0123456789';
var symbols = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';

// Declare an object variable containing the necessary criteria
var profile = {
  length: 0,
  upperCase: true,
  lowerCase: true,
  numeric: true,
  specChar: true,

  pwdLength: function (newLength) {
    newLength = parseInt(prompt("Choose your password length (must be a number between 8 and 128 characters"));

    while (isNaN(newLength) || newLength < 8 || newLength > 128) {
      newLength = parseInt(prompt("Choose your password length (must be a number between 8 and 128 characters"));
    }
    this.length = newLength;
    console.log("Length = " + this.length);
    return (newLength);
  },

  pwdUpperCase: function () {
    this.upperCase = confirm("Do you want to include upper case letters?");
    console.log("UpperCase = " + this.upperCase);
  },

  pwdLowerCase: function () {
    this.lowerCase = confirm("Do you want to include lower case letters?");
    console.log("LowerCase = " + this.lowerCase);
  },

  pwdNumeric: function () {
    this.numeric = confirm("Do you want to include numbers?");
    console.log("Numeric = " + this.numeric);
  },

  pwdSpecChar: function () {
    this.specChar = confirm("Do you want to include special characters?");
    console.log("SpecChar = " + this.specChar);
  }
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  console.log("This is the password value: " + password);
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  profile.pwdLength();
  profile.pwdUpperCase();
  profile.pwdLowerCase();
  profile.pwdNumeric();
  profile.pwdSpecChar();

  var compiled = "";
  var randomized = "";
  
  if (profile.upperCase === true) {
    var upper = letters.toUpperCase();
    compiled += upper;
    console.log("Upper Case Result = " + compiled);
    console.log(compiled.length);
  }

  if (profile.lowerCase === true) {
    compiled += letters;
    console.log("Lower case Result = " + compiled);
    console.log(compiled.length);
  }

  if (profile.numeric === true) {
    compiled += numbers;
    console.log("Numeric Result = " + compiled);
    console.log(compiled.length);
  }

  if (profile.specChar === true) {
    compiled += symbols;
    console.log("Symbols Result = " + compiled);
    console.log(compiled.length);
  }
  else if (profile.upperCase === false && profile.lowerCase === false && profile.numeric === false) {
    alert("At least one criteria must be selected. Please generate a new password.");
  }

  for (var i = 0; i < profile.length; i++) {
    var randomChar = Math.floor(Math.random() * compiled.length);
    randomized += compiled.charAt(randomChar);
  }
  console.log(randomized + " is " + randomized.length + " characters long");

  return (randomized);
}

