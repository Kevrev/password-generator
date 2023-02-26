// Assignment Code
var generateBtn = document.querySelector("#generate");
var checkboxForm = document.querySelector(".checkboxform")

const lowercaseEl = document.querySelector("#lowercase");
const uppercaseEl = document.querySelector("#uppercase");
const numbersEl = document.querySelector("#numbers");
const symbolsEl = document.querySelector("#symbols");
const generateEl = document.querySelector("#generate");

// Random Generation for the Potential Parameters
const minLetter = 1;
const maxLetter = 27;
const numbersList = "0123456789";
const symbolsList = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"

// Reveals the parameters upon first click of generate password
function parametersMenu() {
  checkboxForm.style.display = "inline";
};


// test function for generatePassword
const test = "1";
const test1 = "2";
function generatePassword() {
  return test + test1
}; 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Criteria functions


// Uppercase generation
// Uppercase Character codes from 65 - 90
function genUpper() {
  return String.fromCharCode(Math.floor(Math.random() * (maxLetter - minLetter) + minLetter + 64));
}

// Lowercase generation
// Lowercase Character codes from 97 - 122
function genLower() {
  return String.fromCharCode(Math.floor(Math.random() * (maxLetter - minLetter) + minLetter + 96));
}

// Number generation
// Codes or random index of numbersList works here
function genNumber() {
  return numbersList[Math.floor(Math.random() * numbersList.length)];
}

// symbols generation
// Random index of symbolsList is better here since charset codes are spread out all over
function genSpecial() {
  return symbolsList[Math.floor(Math.random() * symbolsList.length)];
}



// Add event listener to generate button
// Creates parameters menu, generates and writes password after selection and second press
generateBtn.addEventListener("click", function() {
  parametersMenu();
  generatePassword();
  writePassword();
});
// generateBtn.addEventListener("click", writePassword);
