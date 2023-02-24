// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Criteria functions

let minLetter = 1;
let maxLetter = 27;

// uppercase generation
function genUpper() {
  return String.fromCharCode(Math.floor(Math.random() * (maxLetter - minLetter) + minLetter + 64));
}

console.log(genUpper())


// lower

function genLower() {

}

// number
function genNumber() {

}

// special
function genSpecial() {

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
