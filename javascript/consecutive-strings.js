// You are given an array strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.
// Example: longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"

function longestConsec(strarr, k) {
  if (strarr.length == 0 || k > strarr.length || k <= 0) {
    return '';
  }
  let longestWord = '';
  for (let i = 0; i < strarr.length - k + 1; i++) {
    let testWord = '';
    for (let j = 0; j < k; j++) {
      testWord += strarr[i + j];
    }
    if (longestWord.length < testWord.length) {
      longestWord = testWord;
    }
  }
  return longestWord;
}
