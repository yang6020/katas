# You have to write a function printer_error which given a string will output the error rate of the printer as a string
# representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.
# range that isn't an error is [a-m]

# Examples
# s="aaabbbbhaijjjm"
# error_printer(s) => "0/14"
# s="aaaxbbbbyyhwawiwjjjwwm"
# error_printer(s) => "8/22"


def printer_error(s):
    errors = 0
    total = str(len(s))
    alphabet = ["a", "b", "c", "d", "e", "f",
                "g", "h", "i", "j", "k", "l", "m"]
    for letter in s:
        if letter not in alphabet:
            errors += 1
    return "" + str(errors) + "/" + total
