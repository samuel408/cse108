import json

class GradesProgram:
    def __init__(self):
        self.grades_data = self.load_grades_data()

    def load_grades_data(self):
        try:
            with open("grades.txt", "r") as file:
                return json.load(file)
        except FileNotFoundError:
            return {}

    def save_grades_data(self):
        with open("grades.txt", "w") as file:
            json.dump(self.grades_data, file)

    def create_grade(self, student_name, grade):
        self.grades_data[student_name] = grade
        self.save_grades_data()

    def get_grade(self, student_name):
        return self.grades_data.get(student_name, "Student not found")

    def edit_grade(self, student_name, new_grade):
        if student_name in self.grades_data:
            self.grades_data[student_name] = new_grade
            self.save_grades_data()
            return f"Grade for {student_name} updated successfully"
        else:
            return f"Student {student_name} not found"

    def delete_grade(self, student_name):
        if student_name in self.grades_data:
            del self.grades_data[student_name]
            self.save_grades_data()
            return f"Grade for {student_name} deleted successfully"
        else:
            return f"Student {student_name} not found"

def main():
    program = GradesProgram()

    while True:
        print("\nOptions:")
        print("1. Create a grade")
        print("2. Get a grade")
        print("3. Edit a grade")
        print("4. Delete a grade")
        print("5. Exit")

        choice = input("Enter your choice (1-5): ")

        if choice == "1":
            student_name = input("Enter student name: ")
            grade = input("Enter grade: ")
            program.create_grade(student_name, grade)
            print("Grade created successfully")

        elif choice == "2":
            student_name = input("Enter student name: ")
            print(program.get_grade(student_name))

        elif choice == "3":
            student_name = input("Enter student name: ")
            new_grade = input("Enter new grade: ")
            print(program.edit_grade(student_name, new_grade))

        elif choice == "4":
            student_name = input("Enter student name: ")
            print(program.delete_grade(student_name))

        elif choice == "5":
            print("Exiting program...")
            break

        else:
            print("Invalid choice. Please enter a number between 1 and 5.")

if __name__ == "__main__":
    main()
