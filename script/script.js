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

var string = "abcdefghijklmnopqrstuvqxyz";
var numeric = '0123456789';
var symbols = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
var compiled = "";

var pwdProfile = {
  length: 0,
  upperCase: true,
  lowerCase: true,
  numbers: true,
  specChar: true,

  pwdLength: function (newLength) {
    newLength = parseInt(prompt("Choose your password length (must be between 8 and 128 characters"));
    
    while (newLength < 8 || newLength > 128) {
      newLength = parseInt(prompt("Choose your password length (must be between 8 and 128 characters"));
    }
    this.length = newLength;
    console.log("Length = " + this.length);
    return(newLength);
  },

  pwdUpperCase: function () {
    this.upperCase = confirm("Do you want to include upper case letters?");
      console.log("UpperCase = " + this.upperCase);
  },

  pwdLowerCase: function () {
    this.lowerCase = confirm("Do you want to include lower case letters?");
    console.log("LowerCase = " + this.lowerCase);
  },

  pwdNumbers: function () {
    this.numbers = confirm("Do you want to include numbers?");
      console.log("Numeric = " + this.numbers);
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
  
  // password1 = Math.ceil(toUpper(alphabet.length) * Math.random()*Math.random());
  // password2 = Math.ceil(alphabet.length * Math.random()*Math.random());
  // password3 = Math.ceil(numeric.length * Math.random()*Math.random());
  // password4 = Math.ceil(specChar.length * Math.random()*Math.random());
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  pwdProfile.pwdLength();
  pwdProfile.pwdUpperCase();
  pwdProfile.pwdLowerCase();
  pwdProfile.pwdNumbers();
  pwdProfile.pwdSpecChar();
 
    if (pwdProfile.upperCase === true) {
      var upper = string.toUpperCase();
      compiled += upper;
      console.log("Upper Case Result = " + compiled);
      console.log(compiled.length);
    }
    
    if (pwdProfile.lowerCase === true) {
      compiled += string;
      console.log("Lower case Result = " + compiled);
      console.log(compiled.length);
    }
    
    if (pwdProfile.numbers === true) {
      compiled += numeric;
      console.log("Numeric Result = " + compiled);
      console.log(compiled.length);
    }
    
    if (pwdProfile.specChar === true) {
      compiled += symbols;
      console.log("Symbols Result = " + compiled);
      console.log(compiled.length);
    }
    
    //var compiledLength = compiled.length;
    var passwordGenerated = "";
    
    for (var i = 0; i < pwdProfile.length; i++) {
      var randomChar = Math.floor(Math.random() * compiled.length);
      passwordGenerated += compiled.charAt(randomChar); 
    }
    console.log(passwordGenerated + " is " + passwordGenerated.length + " characters long");
    

  // console.log("length: " + pwdProfile.length);
  // console.log("upper case: " + pwdProfile.upperCase);
  // console.log("lower case: " + pwdProfile.lowerCase);
  // console.log("numbers: " + pwdProfile.numbers);
  // console.log("spec char: " + pwdProfile.specChar);
  // console.log("--------------------------------");
}

