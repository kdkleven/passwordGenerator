
// Declare a variable for the #generate ID
var generateBtn = document.querySelector("#generate");

// Declare variables containing all letters, numbers, and symbols
var upperAlpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerAlpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numbers = [0,1,2,3,4,5,6,7,8,9];
var symbols = ["!","@","#","$","%","^","&","*","(",")","_","+","~","`","|","}","{","[","]","\:",";","?",">","<",",",".","/","-","="];

var userPassword = "";

// Declare an object variable containing the necessary criteria
var profile = {
  length: 0,
  upperCase: true,
  lowerCase: true,
  numeric: true,
  specChar: true,

  pwdLength: function () {
    profile.length = parseInt(prompt("Choose your password length (must be a number between 8 and 128 characters"));
    
    while (profile.length < 8 || profile.length > 128 || isNaN(profile.length) || profile.length == null)  {
      profile.length = parseInt(prompt("Choose your password length (must be a number between 8 and 128 characters"));
    }
    console.log("length: " + this.length);  
  },

  pwdUpperCase: function () {
    this.upperCase = confirm("Do you want to include upper case letters?");
    console.log("upperCase: " + this.upperCase);
    
    if (profile.upperCase === true) {
      for (var u = 0; u < profile.length; u++) {
        var upperRandom = Math.floor(Math.random() * upperAlpha.length);
        userPassword += upperAlpha[upperRandom];
      }
      console.log("upperPassword: " + userPassword + " length is " + userPassword.length + " and type is " + typeof(userPassword));
    }
    return(userPassword);
  },

  pwdLowerCase: function () {    
    this.lowerCase = confirm("Do you want to include lower case letters?");
    console.log("lowerCase: " + this.lowerCase);

    if (profile.lowerCase === true) {
      for (var l = 0; l < profile.length; l++) {
        var lowerRandom = Math.floor(Math.random() * lowerAlpha.length);
        userPassword += lowerAlpha[lowerRandom];  
      }
    console.log("lowerPassword: " + userPassword + " length is " + userPassword.length + " and type is " + typeof(userPassword));
    }
    return(userPassword);
  },

  pwdNumeric: function () {    
    this.numeric = confirm("Do you want to include numbers?");
    console.log("Numeric = " + this.numeric);

    if (profile.numeric === true) {
      for (var n = 0; n < profile.length; n++) {
        var numbersRandom = Math.floor(Math.random() * numbers.length);
        userPassword += numbers[numbersRandom];  
      }
    console.log("numbers: " + userPassword + " length is " + userPassword.length + " and type is " + typeof(userPassword));
    }
    return(userPassword);
  },

  pwdSpecChar: function () {   
    this.specChar = confirm("Do you want to include special characters?");
    console.log("SpecChar = " + this.specChar);
    
    if (profile.specChar === true) {
      for (var s = 0; s < profile.length; s++) {
        var symbolsRandom = Math.floor(Math.random() * symbols.length);
        userPassword += symbols[symbolsRandom];  
      }
    console.log("symbols: " + userPassword + " length is " + userPassword.length + " and type is " + typeof(userPassword));
    }
    else if (profile.upperCase === false && profile.lowerCase === false && profile.numeric === false) {
      alert("At least one criteria must be selected. Please generate a new password.");
      generatePassword();
    }
    return(userPassword);  
  }
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  //console.log("This is the password value: " + password + " and it is " + password.length + " characters");
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

  var combined = userPassword;
  console.log("combined: " + combined);
  var combinedLength = combined.length;
  console.log("combinedLength: " + combinedLength);
  var result = "";

  for (var i = 0; i < profile.length; i++) {
    result += combined.charAt(Math.floor(Math.random() * combinedLength));
  }
  console.log(result);
  
  userPassword = "";

  return result;
}

