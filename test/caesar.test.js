// Write your tests here!

const caesar = require("../src/caesar");
const expect = require("chai").expect;

describe("caesar", () => {
  it("should return encoded string with right shift", () => {
    
    const input = "helloworld";
    const shift = 3;
    const expected = "khoorzruog";
    const actual = caesar(input,3);
    expect(actual).to.equal(expected);
    });

  it("should return encoded string ignor uppercase with right shift", () => {
    
    const input = "HelloWorld";
    const shift = 3;
    const expected = "khoorzruog";
    const actual = caesar(input,3);
    expect(actual).to.equal(expected);
    });
  

  it("should return encoded string with space with right shift", () => {
      
      const input = "This is a secret message!";
      const shift = 8;
      const expected = "bpqa qa i amkzmb umaaiom!";
      const actual = caesar(input, shift);
      expect(actual).to.equal(expected);
      });

  it("should return encoded string with special characters with right shift", () => {
      
      const input = "message!!";
      const shift = 8;
      const expected = "umaaiom!!";
      const actual = caesar(input, shift);
      expect(actual).to.equal(expected);
      });

  it("should return encoded string with numbers with right shift", () => {
      
      const input = "bj ji xjpio ja 123"; 
      const shift = 5;
      const expected = "go on count of 123";
      const actual = caesar(input, shift);
      expect(actual).to.equal(expected);
      });

  it("should return encoded string when string is lowercase with right shift", () => {
      
      const input = "ebiiltloia";
      const shift = 3;
      const expected = "helloworld";
      const actual = caesar(input, shift);
      expect(actual).to.equal(expected);
      });

  it("should return encoded string that go past end of the alphabet with right shift", () => {
      
      const input = "Zebra Magazine";
      const shift = 3;
      const expected = "cheud pdjdclqh";
      const actual = caesar(input, shift);
      expect(actual).to.equal(expected);
      });
});


describe("caesar", () => {
  it("should return encoded string with left shift", () => {
      
      const input = "helloworld";
      const shift = -3;
      const expected = "ebiiltloia";
      const actual = caesar(input, shift);
      expect(actual).to.equal(expected);
      });


  it("should return encoded string ignor uppercase with left shift", () => {
      
      const input = "HelloWorld";
      const shift = -3;
      const expected = "ebiiltloia";
      const actual = caesar(input, shift);
      expect(actual).to.equal(expected);
      });


  it("should return encoded string with special characters with left shift", () => {
      
      const input = "$Hello World!!";
      const shift = -3;
      const expected = "$ebiil tloia!!";
      const actual = caesar(input, shift);
      expect(actual).to.equal(expected);
      });

  it("should return encoded string space intact with left shift", () => {
      
      const input = "hello World";
      const shift = -3;
      const expected = "ebiil tloia";
      const actual = caesar(input, shift);
      expect(actual).to.equal(expected);
      });

  it("should return encoded string with numbers with left shift", () => {
      
      const input = "helloWorld123";
      const shift = -3;
      const expected = "ebiiltloia123";
      const actual = caesar(input, shift);
      expect(actual).to.equal(expected);
      });
});

describe("caesar", () => {
  it("should return false when no shift value", () => {
      
      const input = "ebiiltloia";
      const actual = caesar(input);
      expect(actual).to.be.false;
      });

  it("should return false when shift equals to 0", () => {
      
      const input = "ebiiltloia";
      const actual = caesar(input, 0);
      expect(actual).to.be.false;
      });

  it("should return false if shift > 25", () => {
      
      const input = "HelloWorld";
      const shift = 50;
      const actual = caesar(input, shift);
      expect(actual).to.be.false;
      });

  it("should return false if shift < -25", () => {
      
      const input = "HelloWorld";
      const shift = -50;
      const actual = caesar(input, shift);
      expect(actual).to.be.false;
      });
});

describe("caesar", () => {
  it("should return string when encode is false", () => {
      
      const input = "This is a secret message!";
      const shift = 8;
      const encode = false;
      const expected = "bpqa qa i amkzmb umaaiom!";
      const actual = caesar(input, shift, false);
      expect(actual).to.equal(expected);
      });

  it("should return string when encode is true", () => {
      
      const input = "This is a secret message!";
      const shift = 8;
      const encode = true;
      const expected = "bpqa qa i amkzmb umaaiom!";
      const actual = caesar(input, shift, true);
      expect(actual).to.equal(expected);
      });
});

describe("caesar", () => {

   it("decoding a message should ignore capital letters", () => {
      
      const input = "MessagE";
      const shift = 8;
      const encode = false;
      const expected = "umaaiom";
      const actual = caesar(input, shift, false);
      expect(actual).to.equal(expected);
      });

  it("decoding a message should leaves spaces and other symbols as is", () => {
      
      const input = "secret message!";
      const shift = 8;
      const encode = false;
      const expected = "amkzmb umaaiom!";
      const actual = caesar(input, shift, false);
      expect(actual).to.equal(expected);
      });

  it("decoding a message should decode a message by shifting the letters in the opposite direction", () => {
      
      const input = "cheud pdjdclqh";
      const shift = -3;
      const expected = "zebra magazine";
      const actual = caesar(input, shift, false);
      expect(actual).to.equal(expected);
      });

  it("decoding a message should appropriately handle letters at the end of the alphabet", () => {
      
      const input = "cheud pdjdclqh";
      const shift = -3;
      const expected = "zebra magazine";
      const actual = caesar(input, shift, false);
      expect(actual).to.equal(expected);
      });

  it("decoding a message should allow for a negative shift that will shift to the left", () => {
      
      const input = "cheud";
      const shift = -3;
      const expected = "zebra";
      const actual = caesar(input, shift, false);
      expect(actual).to.equal(expected);
      });
});
