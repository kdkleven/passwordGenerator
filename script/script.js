
// Declare a variable for the #generate ID
var generateBtn = document.querySelector("#generate");

// Declare variables containing all letters, numbers, and symbols
var upperAlpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerAlpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "~", "`", "|", "}", "{", "[", "]", "\:", ";", "?", ">", "<", ",", ".", "/", "-", "="];

// Declare an object variable containing the necessary criteria
var profile = {
  length: 0,
  upperCase: false,
  lowerCase: false,
  numeric: false,
  specChar: false,
  rawPassword: "",

  // function to prompt user for password length
  pwdLength: function () {
    // prompt user for length and assign it to object's length property
    this.length = parseInt(prompt("Choose your password length (must be a number between 8 and 128 characters"));
    
    // validate password length to meet requirements
    while (this.length < 8 || this.length > 128 || isNaN(this.length)) {
      this.length = parseInt(prompt("Choose your password length (must be a number between 8 and 128 characters"));
    }
    
    // return pasword length
    return (this.length);
  },

  // function to determine whether uppercase will be included or not
  pwdUpperCase: function () {
    
    // prompt user for selection
    this.upperCase = confirm("Do you want to include upper case letters?");
    
    // true, generate random upper case password that meets length requirements
    if (this.upperCase === true) {
      for (var u = 0; u < this.length; u++) {
        var upperRandom = Math.floor(Math.random() * upperAlpha.length);
        this.rawPassword += upperAlpha[upperRandom];
      }
    }
    
    // return random password
    return this.rawPassword;
  },
  
  // function to determine whether lowercase will be included or not
  pwdLowerCase: function () {
    
    // prompt user for selection
    this.lowerCase = confirm("Do you want to include lower case letters?");
    
    // true, generate random lower case password that meets length requirements, appended to rawPassword
    if (this.lowerCase === true) {
      for (var l = 0; l < this.length; l++) {
        var lowerRandom = Math.floor(Math.random() * lowerAlpha.length);
        this.rawPassword += lowerAlpha[lowerRandom];
      }
    }

    // return random password
    return this.rawPassword;
  },

  // function to determine whether lowercase will be included or not
  pwdNumeric: function () {
    
    // prompt user for selection
    this.numeric = confirm("Do you want to include numbers?");

    // true, generate random numeric password that meets length requirements, appended to rawPassword
    if (this.numeric === true) {
      for (var n = 0; n < this.length; n++) {
        var numbersRandom = Math.floor(Math.random() * numbers.length);
        this.rawPassword += numbers[numbersRandom];
      }
    }

    // return random password
    return this.rawPassword;
  },

  // function to determine whether symbols will be included or not
  pwdSpecChar: function () {   
    this.specChar = confirm("Do you want to include special characters?");
    
    // true, generate random numeric password that meets length requirements, appended to rawPassword
    if (this.specChar === true) {
      for (var s = 0; s < profile.length; s++) {
        var symbolsRandom = Math.floor(Math.random() * symbols.length);
        this.rawPassword += symbols[symbolsRandom];  
      }
    }
    // validate to ensure at least one critera is selected (rerun the function)
    else if (this.upperCase === false && this.lowerCase === false && this.numeric === false && this.specChar === false) {
      alert("At least one criteria must be selected. Please generate a new password.");
      return;
    }
    return(this.rawPassword);  
  }
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Generate the password
function generatePassword() {
  // ask user for various criteria
  
  while (profile.length !== null) {
    profile.pwdLength();
    profile.pwdUpperCase();
    profile.pwdLowerCase();
    profile.pwdNumeric();
    profile.pwdSpecChar();

    // declare password length and result variables
    var rawPasswordLength = profile.rawPassword.length;
    var result = "";

    // iterate through the raw password and use math.random to generate a random password that meets the length of the user's input
    for (var i = 0; i < profile.length; i++) {
      result += profile.rawPassword.charAt(Math.floor(Math.random() * rawPasswordLength));
    }

    // reset raw password
    profile.rawPassword = "";

    // return generated password
    return result;
  }
}

