// Assignment code here
function generatePassword() {
 var passwordLength = prompt("Please enter the number of characters you want for your password. (Must equal or less than 12-128 characters.");
 var numbers = confirm("Would you like your password to have numbers");
 var lowerCases = confirm("Would you like your password to have lowercases?");
 var upperCases = confirm("Would you like your password to have uppercases?");
 var special = confirm("Would you like your password to have special characters?");


 //  Minimum count for numbers, lowerCases, upperCases, and specialCharacters
 var minimumCount = 0;

 // Empty minimums for password demands if confirmed 
 var minimumLowerCases = "";
 var minimumUpperCases = "";
 var minimumSpecialCharacters = "";  

 // Functions generator
var functionArray = {
  getNumbers: function() {
    return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
  },
  getLowerCases: function() {
    return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
  },
  getUppercases: function() {
    return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
  },
  getSpecialCharacters: function () {
    return specialCharacters(Math.floor(Math.random() * specialCharacters.length));
  }
};

// This series of code is if the user selected confirm for the password demands
if (numbers === true) {
  minimumNumbers = funcionArray.getNumbers();
  minimumCount++;
}

if (lowerCases === true) {
  minimumLowerCases = functionArray.getLowerCases;
  minimumCount++;
}

if (upperCases === true) {
  minimumUpperCases = functionArray.getUppercases;
  minimumCount++;
}

if (special === true) {
  minimumSpecialCharacters = functionArray.getSpecialCharacters;
  minimumCount++;
}

// Empty string variable for the loop below
var randomPasswordGenerated = "";

// Created a loop to generate random characters
for (let i = 0; i < (parseInt(passwordLength) - minimumCount); i++) {
  var randomNumberPicked = Math.floor(Math.random() * 4);

  randomPasswordGenerated += randomNumberPicked;

}

// To make sure characters are added to the password
randomPasswordGenerated += minimumNumbers;
randomPasswordGenerated += minimumLowerCases;
randomPasswordGenerated += minimumUpperCases;
randomPasswordGenerated += minimumSpecialCharacters; 

return randomPasswordGenerated;
};


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// This is the function that is created for special
const specialCharacters = "!@#$%^&*()";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
