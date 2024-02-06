# Write a punishment automation program in Python that does the following (15 points):
# a. Ask the user to enter a sentence and the times a sentence should be repeated
# b. The program should write the sentence (with a line break) the number of times
# specified by the user to a file called “CompletedPunishment.txt”
# c. Example:
# i. The user enters this for the sentence: I will not sleep in class
# ii. The user enters this for the number of repeats: 100
# iii. The program should write “I will not sleep in class” 100 times to
# “CompletedPunishment.txt”.
amount = int(input("Enter the amount of times you want the sentence to be repeated: "))

input = input("Enter a sentence: ")

with open("CompletedPunishment.txt", "w") as file:
    for i in range(amount):
        file.write(input + "\n")
    file.close()