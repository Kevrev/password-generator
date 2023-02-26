// Assignment Code
var generateBtn = document.querySelector("#generate");
var checkboxForm = document.querySelector(".checkboxform")

const lowercaseEl = document.querySelector("#lowercase");
const uppercaseEl = document.querySelector("#uppercase");
const numbersEl = document.querySelector("#numbers");
const symbolsEl = document.querySelector("#symbols");
const generateEl = document.querySelector("#generate");
// const passLength = lengthEl.value;

// Random Generation for the Potential Parameters
const minLetter = 1;
const maxLetter = 27;
const numbersList = "0123456789";
const symbolsList = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"

// Reveals the parameters upon first click of generate password
function parametersMenu() {
  checkboxForm.style.display = "inline";
};

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

generateBtn.addEventListener("click", function() {
  parametersMenu();
  const passLength = parseInt(document.querySelector("#passlength").value);
  const upperTrue = uppercaseEl.checked;
  const lowerTrue = lowercaseEl.checked;
  const numbersTrue = numbersEl.checked;
  const symbolsTrue = symbolsEl.checked;
  const paraArr = [upperTrue, lowerTrue, numbersTrue, symbolsTrue];
  const generatedPass = generatePass(paraArr, passLength); 
  function writePass() { 
    var password = generatedPass.slice(0, passLength);
    var passwordText = document.querySelector("#password");
  
    passwordText.value = String(password);
  }
  writePass();
});

function generatePass(paraArr, passLength) {
  let generatedPass = '';
  for (let i = 0; i <= passLength; i++) {
    for (let i = 0; i < paraArr.length; i++) {
      if (paraArr[i] === true) {
        if (i === 0){
          generatedPass += genUpper();
        } else if (i === 1) {
          generatedPass += genLower();
        } else if (i === 2) {
          generatedPass += genNumber();
        } else if (i === 3) {
          generatedPass += genSpecial();
        }
      }
      if (generatedPass.length === passLength) {
        break;
      }
    }
  }
  return generatedPass;
}
