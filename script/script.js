const { tsConstructSignatureDeclaration } = require("@babel/types");

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

var questions = [
  { q: "Select your password length", a: 0 },  
  { q: "Do you want to include upper case letters?", a: "t" },
  { q: "Do you want to include lower case letters?", a: "t" },
  { q: "Do you want to include numbers?", a: "t" },
  { q: "Do you want to include special characters?", a: "t" }
];

//Array of letters for lowercase and uppercase (with toUpper) criteria
var pwdAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//Array of numbers for numeric criteria
var pwdNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
//Array of special characters for spec.char. criteria
var pwdSpecialChar = [
  "+", "-", "&&", "||", "!", "(",
  ")", "{", "}", "[", "]", "^",
  "~", "*", "?", ":","\"","\\"];

//For the first question, prompt a numerical response
for (var i = 0; i = questions.q[0]; i) {
  //prompt user to select password length
  var passwordL = parseInt(prompt("Choose your password length (must be between 8 and 128 characters"));
  
  if (passwordL < 8 || passwordL > 128) {
      alert("Your password does not meet the required length. Try again.");
  }
  else {
    //Iterate through the remaining questions to get boolean responses
    for (var j = 0; j = questions.length; j++) {
      var answer = confirm(questions[i].q);

      if ((answer === true && questions[i].a === "t") ||
        (answer === false && questiona[i].a === "f")) {
        
      }

    }
  
  }
  
}


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

