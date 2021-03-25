// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope


  function substitution(input, alphabet, encode = true) {
    // your solution code here

    let result = "";
    const realAplhabet = "abcdefghijklmnopqrstuvwxyz";
    let inputInLowerCase = input.toLowerCase();

    /** 
     * Create array of substitution alphabet
     * and check if any duplicate 
     * return false in case of duplicate found
     */

    function isCharactersInSubstitionAlphabetUnique(alphabet) {

      const arrOfAlphabet = [...alphabet];
      for (let character of arrOfAlphabet) {

      const isDuplicateFound = arrOfAlphabet.filter((char) => (character === char))
      
        if (isDuplicateFound.length > 1) {
          return false;
        }
      return true;
      }
    }

    if (!alphabet || !input) {
      return false;
    }

    if (alphabet.length != 26) {
      return false;
    }

    if (!isCharactersInSubstitionAlphabetUnique(alphabet)) {
      return false;
    }

    const encodeAlphaMapping = [...realAplhabet].reduce((alpha, char, index)=>{
        alpha[char] = alphabet[index];
        return alpha;
      },{})

    const decodeAlphaMapping = [...alphabet].reduce((alpha, char, index)=> {
      alpha[char] = realAplhabet[index];
      return alpha;
    }, {}) 

    if(encode) {

      for (let char of inputInLowerCase) {
        if (char === " ") {
          result += " ";
          continue;
        }
        result += encodeAlphaMapping[char];
      }

    } else {

      for (let char of inputInLowerCase) {
        if (char === " ") {
          result += " ";
          continue;
        }
        result += decodeAlphaMapping[char];
      }
    }

    return result;
    
  }

  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;


