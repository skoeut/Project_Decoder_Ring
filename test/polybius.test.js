// Write your tests here!

const {polybius} = require('../src/polybius');
const expect = require("chai").expect

describe('polybius', () => {
    it('should correctly encode a message', () => {
        const actual = polybius("secret");
        expect(actual).to.equal("345131245144");
    });

    it('should correctly decode a message', () => {
        const actual = polybius("23513434112251", false);
        expect(actual).to.equal('message');
    });

    it('should ignore captial letters and maintain spaces', () =>{
        const actual = polybius("Hello world");
        expect(actual).to.eql("3251131343 2543241341");
    });

    it('should return false when trying to decode a string that is not even in length', () =>{
        const actual = polybius("44324233521254134", false);
        expect(actual).to.be.false;
    });

    it('should include i and j as 1 letter', () =>{
        const actual = polybius('4432423352125413', false);
        expect(actual).to.equal('thi/jnkful')
    });
});