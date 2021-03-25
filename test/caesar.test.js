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
  
});

describe("caesar", () => {
  it("should return encoded string ignor uppercase", () => {
    
    const input = "HelloWorld";
    const shift = 3;
    const expected = "khoorzruog";
    const actual = caesar(input,3);
    expect(actual).to.equal(expected);
    });
  
});

describe("caesar", () => {
  it("should return encoded string with left and ignor uppercase", () => {
      
      const input = "HelloWorld";
      const shift = -3;
      const expected = "ebiiltloia";
      const actual = caesar(input, shift);
      expect(actual).to.equal(expected);
      });
});

describe("caesar", () => {
  it("should return encoded string with space", () => {
      
      const input = "This is a secret message!";
      const shift = 8;
      const expected = "bpqa qa i amkzmb umaaiom!";
      const actual = caesar(input, shift);
      expect(actual).to.equal(expected);
      });
});

describe("caesar", () => {
  it("should return encoded string with special characters", () => {
      
      const input = "message!!";
      const shift = 8;
      const expected = "umaaiom!!";
      const actual = caesar(input, shift);
      expect(actual).to.equal(expected);
      });
});

describe("caesar", () => {
  it("should return decoded string when string is lowercase", () => {
      
      const input = "ebiiltloia";
      const shift = 3;
      const expected = "helloworld";
      const actual = caesar(input, shift);
      expect(actual).to.equal(expected);
      });
});

describe("caesar", () => {
  it("should return decoded string with space", () => {
      
      const input = "ebiil tloia";
      const shift = 3;
      const expected = "hello world";
      const actual = caesar(input, shift);
      expect(actual).to.equal(expected);
      });
});

describe("caesar", () => {
  it("should return encoded string - right with numbers", () => {
      
      const input = "bj ji xjpio ja 123"; 
      const shift = 5;
      const expected = "go on count of 123";
      const actual = caesar(input, shift);
      expect(actual).to.equal(expected);
      });
});

describe("caesar", () => {
  it("should return encoded string -left with numbers", () => {
      
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
});

describe("caesar", () => {
  it("should return false when shift equals to 0", () => {
      
      const input = "ebiiltloia";
      const actual = caesar(input, 0);
      expect(actual).to.be.false;
      });
});

describe("caesar", () => {
  it("should return false if shift > 25", () => {
      
      const input = "HelloWorld";
      const shift = 50;
      const actual = caesar(input, shift);
      expect(actual).to.be.false;
      });
});

describe("caesar", () => {
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
});

describe("caesar", () => {
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
  it("should return string that go past end of the alphabet", () => {
      
      const input = "Zebra Magazine";
      const shift = 3;
      const expected = "cheud pdjdclqh";
      const actual = caesar(input, shift);
      expect(actual).to.equal(expected);
      });
});
