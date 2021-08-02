// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {

const startAlpha = "abcdefghijklmnopqrstuvwxyz"

  function substitution(input, alphabet, encode = true) {
  //checks for edges cases
  if (!alphabet || alphabet.length !== 26) return false
  //splits given alphapbet into array of letters to check for duplicates
  const split = alphabet.split('')
  //checks for duplicates in given alphabet
  const findDuplicates = split.some((element, index) => {
  return split.indexOf(element) !== index})
  //accounts for capital letter in input by making them lowercase
  input = input.toLowerCase().split('')
  //returns false if there are duplicates
  if (findDuplicates) return false 
  //create variable that will be eventual encoded message
  let finalMessage = ''
  //to encode
  if (encode) {
    //loop through input
     input.forEach((letter) => {
       //look for spaces
      if (letter === ' ') {
        //include spaces
      finalMessage += ' '
      } else {
        //find index of provided input letter on original alphabet
        let index = startAlpha.indexOf(letter); 
        //use that index to match with given alphabet
        finalMessage += alphabet[index];
      }
   })
   return finalMessage
  }
  //to decode
  if (!encode) {
    //loop through input
    input.forEach((letter) => {
      //look for spaces
     if (letter === ' ') {
       //include spaces
       finalMessage += ' '
     }
      //loop through provided alphabet
      for (let i = 0; i < alphabet.length; i++) {
        //look for match between input letter and alphabet letter
        if (letter === alphabet[i]) {
          //use the index when there is a match to find corresponding letter on original alphabet
        finalMessage += startAlpha[i];
        }
      }
    })
  return finalMessage
  }
}
        
return {
substitution,
};
})();
        
module.exports = { substitution: substitutionModule.substitution };