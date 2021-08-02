// Write your tests here!
const expect = require("chai").expect
const {caesar} = require("../src/caesar")

describe("caesar", () => {
   it("should encode a message when shift is postitive", () => {
      const expected = "phvvdjh";
      const actual = caesar('message', 3);
      expect(actual).to.eql(expected);
      });

   it("should encode a message when shift is negative", () => {
      const expected = 'jbppxdb'
      const actual = caesar("message", -3);
      expect(actual).to.eql(expected)
     });

   it("should decode a message", () => {
      const expected = 'message'
      const actual = caesar('umaaiom', 8, false)
      expect(actual).to.eql(expected)
   });

  it("should return false if the shift value is not present", () => {
      const actual = caesar("thinkful");
      expect(actual).to.be.false;
      });

   it("should return false if the shift value is 0", () => {
      const actual = caesar("thinkful", 0);
      expect(actual).to.be.false;
      });

  it("should return false if the shift value is greater than 25", () => {
      const actual = caesar("thinkful", 99);
      expect(actual).to.be.false;
      });
   
   it("should return false if the shift value is less -25", () => {
      const actual = caesar("thinkful", -26);
      expect(actual).to.be.false;
      });

  it("should maintain spaces and other non-alphabetic symbols", () => {
      const expected = "bpqa qa i amkzmb umaaiom!";
      const actual = caesar("This is a secret message!", 8);
      expect(actual).to.eql(expected);
   });
})