// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
// Examples:
// pigIt('Pig latin is cool'); => igPay atinlay siay oolcay
// pigIt('Hello world !');     => elloHay orldway !

function pigIt(str) {
  strArr = str.split(' ');
  let resultArr = [];
  strArr.map(word => {
    if (word != '?' && word != '!' && word != '.') {
      let firstChar = word.charAt(0);
      let wordString = word.substring(1, word.length);
      resultArr.push(wordString + firstChar + 'ay');
    } else {
      resultArr.push(word);
    }
  });
  return resultArr.join(' ');
}
