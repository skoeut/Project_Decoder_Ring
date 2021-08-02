// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
    const decodeGrid = {11:'a', 21:'b', 31:'c', 41:'d', 51:'e', 12:'f', 22:'g', 32:'h', 42: '(i/j)', 52:'k', 13:'l', 23:'m', 33:'n', 43:'o', 53:'p', 14:'q', 24:'r', 34:'s', 44:'t', 54:'u', 15:'v', 25:'w', 35:'x', 45:'y', 55:'z'}
    
const encodeGrid = { "a": 11, "f": 12, "l": 13, "q": 14, "v": 15,"b": 16, "g": 22, "m": 23, "r": 24, "w": 25, "c": 31, "h": 32, "n": 33, "s": 34, "x": 35, "d": 41, "i": 42, "j":42, "o": 43, "t": 44, "y": 45, "e": 51, "k": 52, "p": 53, "u": 54, "z": 55};


  function polybius(input, encode = true) {
  if (encode) {
  //split input into array of separate letters
  input = input.toLowerCase().split('')
      //declare a variable that will eventually be the encoded message
      let encodedMessage = ''
      //loop through newly created input array of separated letters
      for (let i = 0; i < input.length; i++) {
        //check for spaces
        if (input[i] === ' ') {
          //include spaces
          encodedMessage += ' '
        }
        //loop through encodeGrid object
        Object.keys(encodeGrid).forEach((letter) => {
          if (input[i] === letter) {
            //update result variable with encodeGrid value when there is a letter match
            encodedMessage += encodeGrid[letter]
          }
        })
      }
      return encodedMessage
    } else {
     //check if length of all numbers is odd
   if (input.replace(/\s/g, "").length % 2 !== 0) return false
      //declare variable that will contain decoded message
    let decodedMessage = ''
    //loop through encode message (input) by 2
    for(let i = 0; i < input.length; i += 2){
      //check and account for spaces in encoded message
      if(input[i] == ' ') {
        decodedMessage += ' '
        i -= 1
      } else {
        //create variable that is result of patching 
        let match = `${input[i]}${input[i+1]}`
        //find letter match using decodeGrid object
        decodedMessage += decodeGrid[match]
      }
    }
    return decodedMessage
  }
 }
  
      
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };