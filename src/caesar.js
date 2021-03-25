// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  const regex = "[a-zA-Z]";

  /**
   * Helper function to convert lowercase
   * @param {*} input 
   * @returns 
   */

  function convertToLowerCase(input) {
    const stringWithLowerCase = input.toLowerCase();
    return stringWithLowerCase;
  } 

  /**
   *  Helper function to shift characters
   * @param {} letter 
   * @param {*} shift 
   * @returns 
   */

  function shiftletter(letter, shift) {
    let newLetter ="";
    let currentLetter = letter.charCodeAt(0);
    let newLetterCode = currentLetter + shift;

    if (newLetterCode < 97) {
      newLetterCode += 26;
    } else if (newLetterCode > 122) {
      newLetterCode -= 26;
    }
    newLetter = String.fromCharCode(newLetterCode);

    return newLetter;
  }

  // function with caesar cipher algorithm
  function caesar(input, shift, encode = true) {
    // your solution code here

    let encryptedMessage = "";
    const inputInLowercase = convertToLowerCase(input);
    let messageToBeEncrypted = [...inputInLowercase];

    
    if( !shift || shift === 0 || shift < -25 || shift > 25 ) {
      return false;
    }

    if(encode) {

      messageToBeEncrypted = messageToBeEncrypted.forEach ((char) => {
        if (!char.match(regex)) {
          return encryptedMessage += char;
        }
         encryptedMessage += shiftletter(char, shift);        
      })

    } else {
       messageToBeEncrypted = messageToBeEncrypted.forEach ((char) => {
        if (!char.match(regex)) {
          return encryptedMessage += char;
        }
         encryptedMessage += shiftletter(char, shift);        
      })
    }

    return encryptedMessage;

  }

  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;

