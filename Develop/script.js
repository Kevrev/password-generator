// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Criteria functions

const minLetter = 1;
const maxLetter = 27;
const numbersList = "0123456789";
const symbolsList = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"

// Uppercase generation
// Uppercase Character codes from 65 - 90
function genUpper() {
  return String.fromCharCode(Math.floor(Math.random() * (maxLetter - minLetter) + minLetter + 64));
}

console.log(genUpper())

// Lowercase generation
// Lowercase Character codes from 97 - 122
function genLower() {
  return String.fromCharCode(Math.floor(Math.random() * (maxLetter - minLetter) + minLetter + 96));
}

console.log(genLower())

// Number generation
// Codes or random index of numbersList works here
function genNumber() {
  return numbersList[Math.floor(Math.random() * numbersList.length)];
}

console.log(genNumber())

// symbols generation
// Random index of symbolsList is better here since charset codes are spread out all over
function genSpecial() {
  return symbolsList[Math.floor(Math.random() * symbolsList.length)];
}

console.log(genSpecial())

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
