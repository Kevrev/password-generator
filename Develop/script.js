// Assignment Code
var generateBtn = document.querySelector("#generate");
var checkboxForm = document.querySelector(".checkboxform")






// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Criteria functions



// Random Generation for the Potential Parameters
const minLetter = 1;
const maxLetter = 27;
const numbersList = "0123456789";
const symbolsList = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"

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
generateBtn.addEventListener("click", function() {
  checkboxForm.style.display = "block";
});
generateBtn.addEventListener("click", writePassword);
