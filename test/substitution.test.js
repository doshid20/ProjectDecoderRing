// Write your tests here!

const substitution = require("../src/substitution");
const expect = require("chai").expect;

describe("substitution", () => {
    it("should return encoded string", () => {
    
    const input = "excellent";
    const alphabet = "xoyqmcgrukswaflnthdjpzibev";
    const expected = "mbymwwmfj";
    const actual = substitution(input, alphabet);
    expect(actual).to.equal(expected);
    });

    it("should return encoded string keep space intact", () => {
    
    const input = "You are an excellent spy";
    const alphabet = "xoyqmcgrukswaflnthdjpzibev";
    const expected = "elp xhm xf mbymwwmfj dne";
    const actual = substitution(input, alphabet);
    expect(actual).to.equal(expected);
    });

    it("should return encoded string without uppercase", () => {
    
    const input = "Excellent";
    const alphabet = "xoyqmcgrukswaflnthdjpzibev";
    const expected = "mbymwwmfj";
    const actual = substitution(input, alphabet);
    expect(actual).to.equal(expected);
    });


    it("should return encoded string with special characters", () => {
    
    const input = "message";
    const alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
    const expected = "y&ii$r&";
    const actual = substitution(input, alphabet);
    expect(actual).to.equal(expected);
    });

     it("should return decoded string with space", () => {
    
    const input = "mbymwwmfj dne";
    const alphabet = "xoyqmcgrukswaflnthdjpzibev";
    const expected = "excellent spy";
    const actual = substitution(input, alphabet, false);
    expect(actual).to.equal(expected);
    });


    it("should return decoded string when encode is false", () => {
    
    const input = "mbymwwmfj";
    const alphabet = "xoyqmcgrukswaflnthdjpzibev";
    const expected = "excellent";
    const actual = substitution(input, alphabet, false);
    expect(actual).to.equal(expected);
    });

    it("should return decoded string with special character", () => {
    
    const input = "y&ii$r&";
    const alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
    const expected = "message";
    const actual = substitution(input, alphabet, false);
    expect(actual).to.equal(expected);
    });

    it("should return false when input is not provided", () => {
    
    const alphabet = "xoyqmcgrukswaflnthdjpzibev";
    const actual = substitution(alphabet);
    expect(actual).to.be.false;
    });

    it("should return false when substitution alphabet has not been provided", () => {
    
    const input = "excellent";
    const actual = substitution(input);
    expect(actual).to.be.false;
    });

    it("should return false when aplhabet is > 26 ", () => {
    
    const input = "excellent";
    const alphabet = "xoyqmcgrukswaflnthdjpzibev$";
    const actual = substitution(input, alphabet);
    expect(actual).to.be.false;
    });

    it("should return false when aplhabet is < 26 ", () => {
    
    const input = "excellent";
    const alphabet = "xoyqmcgrukswaflnthdj";
    const actual = substitution(input, alphabet);
    expect(actual).to.be.false;
    });

    it("should return false when repeating characters in alphabet", () => {
    
    const input = "excellent";
    const alphabet = "xoyqmcgruxoyqmcgru";
    const actual = substitution(input, alphabet);
    expect(actual).to.be.false;
    });

});
