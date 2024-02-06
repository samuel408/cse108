# Write an adding program that does the following (10 points):
# a. Ask the user to enter two or more numbers separated by spaces
# b. Print the sum of all the numbers to the console
# c. Throw an error if they do not enter at least two numbers or contain a string
# d. Note: the numbers can be integers or decimals
# e. Example:
# i. The user enters: 1 2 3 4
# ii. The program prints: 10

input = input("Enter two or more numbers separated by spaces: ")
numbers = input.split()

if len(numbers) < 2:
    raise ValueError("The input must contain at least two numbers")


sum = 0
for number in numbers:
    try:
        num = float(number)
    except ValueError:
        raise ValueError("The input must be a number")
    sum += num
print(sum)


