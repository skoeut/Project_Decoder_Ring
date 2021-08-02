// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here
  //change input parameter into lower case
  if(!shift) return false 
  const lowerCase = input.toLowerCase()
  //create variable comprised of an array of letters in the alphabet
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
  //create variable set to eventual encoded message
  let finalMessage = ''
  
  //iterate through inputed message
  for (let i = 0; i < lowerCase.length; i++) {
    const currentLetter = lowerCase[i]
    //checks for nonalphabet characters (spaces, periods, etc.) 
    if (!alphabet.includes(currentLetter)) {
      //add those non alphabet characters to finalMessage
      finalMessage += currentLetter
      continue
    }
    //checks for edge case
    if (shift < -25 || shift > 25 || shift === 0) return false
    //create variable set to index of current letter in alphabet array
    const currentIndex = alphabet.indexOf(currentLetter)
    //incorporates the shift parameter and adjusts the letter accordingly
    let newIndex = currentIndex + shift
    //decoding scenario
    if (encode === false) {
      //incorporates negative shift and adjusts the letter accordingly
      newIndex = alphabet.indexOf(currentLetter) - shift
    //accounts for situation after shift is completed where letter falls off the alphabet
    }
    if (newIndex > 25) {newIndex -= 26}
    if (newIndex < 0) {newIndex += 26}
    finalMessage += alphabet[newIndex]
  }
  //return either decoded or encoded message 
  return finalMessage
}
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
