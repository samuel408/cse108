# Write a word count program in Python that does the following (25 points):
# a. Prompt the user to enter a word
# b. Parse PythonSummary.txt and count the number of times the word occurs in the file
# c. Tell the user how many times the word occurs
# d. Note: It should find the word regardless of case (upper or lower) or punctuation
# e. Example:
# i. The user enters: python
# ii. The program should print: The word python occurs 13 times

# Prompt the user to enter a word
input_word = input("Enter a word: ").lower()  # Convert input word to lowercase for case insensitivity

# Initialize a variable to store the count of occurrences
count = 0

# Open the file and count occurrences of the input word
with open("PythonSummary.txt", "r") as file:
    contents = file.read().lower()  # Convert file contents to lowercase for case insensitivity
    
    # Split the contents into words
    words = contents.split()
    
    # Count occurrences of the input word
    for word in words:
        # Remove punctuation from the word (if any)
        word = word.strip(".,?!-;:'")
        
        # Check if the word matches the input word
        if word == input_word:
            count += 1

# Display the result
print(f"The word '{input_word}' occurs {count} times.")
