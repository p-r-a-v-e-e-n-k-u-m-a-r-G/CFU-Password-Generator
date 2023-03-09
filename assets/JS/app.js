const result = document.getElementById("result");
const length = document.getElementById("length");
const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase")
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");
const generatebtn = document.getElementById("generate");
const form = document.getElementById("pws-g-form");

// Generating Character
const UPPERCASE_CODES = Lowh(65, 90);
const LOWERCASE_CODES = Lowh(97, 122);
const NUMBER_CODES = Lowh(48, 57);
const SYMBOL_CODES = Lowh(33, 47)
  .concat(Lowh(58, 64))
  .concat(Lowh(91, 96))
    .concat(Lowh(123, 126));
  
    function Lowh(low, high) {
        const array = [];
        for (let i = low; i <= high; i++) {
          array.push(i);
        }
        return array;
    }
      
      // Password Generating
let generatePassword = (
    characterAmount,
    includeUppercase,
    includeLowercase,
    includeNumbers,
    includeSymbols
  ) => {
    let chartCodes = LOWERCASE_CODES;
    if 
  };
 
  
  
    
/*get the number of characters*/
function charLength() {
    let charLength = document.getElementById("length").value;
    document.getElementById("result").innerHTML = charLength;
    return charLength;
  }
  
  
  document.getElementById("length").addEventListener("change", charLength);



