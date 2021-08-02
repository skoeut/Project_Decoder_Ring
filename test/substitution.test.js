// Write your tests here!

const {substitution} = require("../src/substitution.js");
const expect = require("chai").expect;

describe("substitution", () => {
 
  it("should encode a mesage", () => {
    const expected = "dmyhmj";
    const actual = substitution("secret", "xoyqmcgrukswaflnthdjpzibev");
    expect(actual).to.eql(expected);
  });

  it ("should decode a message" , () => {
    const expected = "message"
    const actual = substitution("amddxgm", "xoyqmcgrukswaflnthdjpzibev", false)
    expect(actual).to.eql(expected)
  })

  it("should false if provided alaphabet is not 26 characters", () => {
    const actual = substitution("message", "short");
    expect(actual).to.be.false;
  });

  it("should return false if there are duplicate characters in the given alphabet", () => {
    const actual = substitution("abc", "aacdefghijklmnopqrstuvwxyz");
    expect(actual).to.be.false;
  });

  it("should maintain spaces, account for capital letter, and some non-alphabet characters", () => {
    const expected = "elp xhm xf mbymwwmfj dne";
    const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
    expect(actual).to.eql(expected);
  });
});