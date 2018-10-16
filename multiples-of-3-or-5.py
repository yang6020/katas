# If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.


def solution(number):
    total_sum = 0
    for i in range(number):
        if (i % 3 == 0 or i % 5 == 0):
            total_sum += i
    return total_sum
