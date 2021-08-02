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
  input = input.toLowerCase()
  //returns false if there are duplicates
  if (findDuplicates) return false 
  //create variable that will be eventual encoded message
  let finalMessage = ''

  if (encode) {
    //loop through input, checking for spaces
    for(let i = 0; i < input.length; i++){
      //includes spaces in final input
      if (input[i] == " ") {
        finalMessage += " ";
        continue;
      }
      let index = startAlpha.indexOf(input[i]); 
      finalMessage += alphabet[index]; 
      }
      return finalMessage
    }
  if (!encode) {
    for (let i = 0; i < input.length; i++) {
      if (input[i] == " ") {
        finalMessage += " ";
        continue;
      }
      for (let j = 0; j < alphabet.length; j++) {
        if (input[i] === alphabet[j]) {
        finalMessage += startAlpha[j];
          }
        }
      }
      return finalMessage;
    }
}
        
return {
substitution,
};
})();
        
      module.exports = { substitution: substitutionModule.substitution };
      