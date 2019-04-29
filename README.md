# Kata Solutions

**Javascript**

- [Calculating with functions](./javascript/calculating-with-functions.js)

  ```
  seven(times(five())); // must return 35
  four(plus(nine())); // must return 13
  eight(minus(three())); // must return 5
  six(dividedBy(two())); // must return 3
  ```

- [Consecutive Stings](./javascript/consecutive-strings.js)

  - You are given an array strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

  ```
  longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2)

  should return "abigailtheta"
  ```

- [Moving Zeroes to the End](./javascript/moving-zeroes-to-the-end.js)

  - Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

  ```
  moveZeros([false,1,0,1,2,0,1,3,"a"])

  returns[false,1,1,2,1,3,"a",0,0]
  ```

* [Valid Parentheses](./javascript/simple-pig-latin.js)

  - Write a function called that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

  ```
  "()"              =>  true
  ")(()))"          =>  false
  "("               =>  false
  "(())((()())())"  =>  true
  ```

* [Simple Pig Latin](./javascript/valid-parentheses.js)
  - Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
  ```
  pigIt('Pig latin is cool'); => igPay atinlay siay oolcay
  pigIt('Hello world !');     => elloHay orldway !
  ```

**Python**

- [Multiples of 3 or 5](./python/multiples-of-3-or-5.py)

  - List all the natural numbers below a number that are multiples of 3 or 5.

  ```
  if number = 10,
  3, 5, 6 and 9.
  returns 23.
  ```

- [Printer Errors](./python/printer-errors.py)

  - Write a function printer_error which given a string will output the error rate of the printer as a string

  - Format should be errors/total
  - Constraints:

    - Don't reduce this fraction to a simpler expression.
    - Range that isn't an error is [a-m]

    ```
    error_printer("aaabbbbhaijjjm")
    returns "0/14"

    error_printer("aaaxbbbbyyhwawiwjjjwwm")
    returns "8/22"
    ```

- [Sum of Positive](./python/sum-of-positive.py)

  - Return the sum of all positives numbers in the array

  ```
  [1,-4,7,12]
  1 + 7 + 12
  returns 20
  ```
