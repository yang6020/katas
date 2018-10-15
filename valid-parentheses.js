// Write a function called that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.
// Examples:
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true

function validParentheses(parens) {
  let valid = 0;
  for (let i = 0; i <= parens.length; i++) {
    if (valid < 0) {
      return false;
    }
    if (parens.charAt(i) == '(') {
      valid += 1;
    }
    if (parens.charAt(i) == ')') {
      valid -= 1;
    }
  }
  return valid == 0;
}
