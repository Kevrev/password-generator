// Assignment Code
var generateBtn = document.querySelector("#generate");
var checkboxForm = document.querySelector(".checkboxform")

const lowercaseEl = document.querySelector("#lowercase");
const uppercaseEl = document.querySelector("#uppercase");
const numbersEl = document.querySelector("#numbers");
const symbolsEl = document.querySelector("#symbols");
const generateEl = document.querySelector("#generate");
const lengthEl = document.querySelector("#passlength");

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



// Add event listener to generate button
// Creates parameters menu, generates and writes password after selection and second press
// generateBtn.addEventListener("click", function() {
//   parametersMenu();
  
//   const upperTrue = "1";
//   const lowerTrue = "2";
//   const numbersTrue = "3";
//   const symbolsTrue = "4";
//   const generatedPass = generatePass(upperTrue, lowerTrue, numbersTrue, symbolsTrue); 
//   function writePass() { 
//     var password = generatedPass;
//     var passwordText = document.querySelector("#password");
  
//     passwordText.value = String(password);
//   }
//   writePass();
// });

// function generatePass(a, b, c, d) {
//   return a + b + c + d;
// }




// generateBtn.addEventListener("click", function() {
//   parametersMenu();
//   const upperTrue = uppercaseEl.checked;
//   const lowerTrue = lowercaseEl.checked;
//   const numbersTrue = numbersEl.checked;
//   const symbolsTrue = symbolsEl.checked;
//   const generatedPass = generatePass(upperTrue, lowerTrue, numbersTrue, symbolsTrue); 
//   function writePass() { 
//     var password = generatedPass;
//     var passwordText = document.querySelector("#password");
  
//     passwordText.value = String(password);
//   }
//   writePass();
//   console.log(upperTrue)
// });

// function generatePass(a, b, c, d) {
//   return [a, b, c, d].filter(Boolean);
// }

// generateBtn.addEventListener("click", function() {
//     parametersMenu();
//     const upperTrue = {check: uppercaseEl.checked};
//     const lowerTrue = {check: lowercaseEl.checked};
//     const numbersTrue = {check: numbersEl.checked};
//     const symbolsTrue = {check: symbolsEl.checked};
//     const checkArray = [upperTrue, lowerTrue, numbersTrue, symbolsTrue];
//     const generatedPass = generatePass(checkArray); 
//     function writePass() { 
//       var password = generatedPass;
//       var passwordText = document.querySelector("#password");
    
//       passwordText.value = String(password);
//     }
//     writePass();
//     console.log(generatedPass);
// });
  
// function generatePass(checkArray) {
//     const filteredTest = checkArray.filter(function(checkArray) {
//       return checkArray.check;
//     })
//    return filteredTest;
// }
  



generateBtn.addEventListener("click", function() {
  parametersMenu();
  const upperTrue = uppercaseEl.checked;
  const lowerTrue = lowercaseEl.checked;
  const numbersTrue = numbersEl.checked;
  const symbolsTrue = symbolsEl.checked;
  const paraArr = [upperTrue, lowerTrue, numbersTrue, symbolsTrue];
  const generatedPass = generatePass(paraArr); 
  function writePass() { 
    var password = generatedPass;
    var passwordText = document.querySelector("#password");
  
    passwordText.value = String(password);
  }
  writePass();
  console.log(upperTrue)
});

function generatePass(paraArr) {
  for (let i = 0; i < paraArr.length; i++) {
    let generatedPass = '';
    if (paraArr[i] === true) {
      console.log('Value at index ${i} is true');

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
  }
  return generatedPass;
}