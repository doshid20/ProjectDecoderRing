// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  const regex = "[a-zA-Z]";

  /**
   * grid char : number
   */
  const polybiusmatrixWithCharKey = {
    a: 11,
    b: 21,
    c: 31,
    d: 41,
    e: 51,
    f: 12,
    g: 22,
    h: 32,
    i: 42,
    j: 42,
    k: 52,
    l: 13,
    m: 23,
    n: 33,
    o: 43,
    p: 53,
    q: 14,
    r: 24,
    s: 34,
    t: 44,
    u: 54,
    v: 15,
    w: 25,
    x: 35,
    y: 45,
    z: 55,
  };

  /**
   * grid number : char
   */
  const polybiusmatrixWithNumKey = { 

    11: "a",
    21: "b",
    31: "c",
    41: "d",
    51: "e",
    12: "f",
    22: "g",
    32: "h",
    42: "(i/j)",
    52: "k",
    13: "l",
    23: "m",
    33: "n",
    43: "o",
    53: "p",
    14: "q",
    24: "r",
    34: "s",
    44: "t",
    54: "u",
    15: "v",
    25: "w",
    35: "x",
    45: "y",
    55: "z",
  };

  /**
   * Helper method to get number associate with char
   * @param {*} char 
   * @returns number associate with character
   */

  const convertCharToNum = (char) => { 
    if (char === "i" || char === "j") {
      return 42;
    }
    const number = polybiusmatrixWithCharKey[char];
    if(!number) {
      return char;
    }
    return number;
  }

  /**
   * Input string
   * @param {*} input 
   * @param {*} encode 
   * @returns message 
   */
  function polybius(input, encode = true) {
    
    let message = "";
    const inputInLowercase = input.toLowerCase();
    let messageToconvert =  [...inputInLowercase];
  
    // if no input
    if(!input) {
      return false;
    }
    
    if(encode) {

      messageToconvert = messageToconvert.forEach ((char) => {
        if (!char.match(regex)) {
          return message += char;
        }
         message += convertCharToNum(char);        
        })
        return message;
    } else {

      /**
       * the number of characters in the string return false if not even
       */
      const messageArr = [];
      const splitMessage = messageToconvert.map((digit) => {
        if(digit !== " ") {
          messageArr.push(digit);
        }
      });

      // return false when array.length is odd
      if(messageArr.length % 2 !== 0) {
        return false;
      }

      /**
       * Decoding numbers string
       */
      for (let num in input) {

        const firstPair = `${input[0]}${input[1]}`

        if(input[0] === " ") {
          message += input[0];
          input = input.slice(1);
          continue;
        }

        for (let value in polybiusmatrixWithNumKey) {
          if (firstPair === value) {
            message += polybiusmatrixWithNumKey[value];
          }
        }
        input = input.slice(2);
      }
            
    }
   return message;
  }

  return {
    polybius,
  };
})();

module.exports = polybiusModule.polybius;
