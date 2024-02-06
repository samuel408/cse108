class Course:
    def __init__(self, department, number, name, credits, lecture_days, start_time, end_time, average_grade):
        self.department = department
        self.number = number
        self.name = name
        self.credits = credits
        self.lecture_days = lecture_days
        self.start_time = start_time
        self.end_time = end_time
        self.average_grade = average_grade

    def format_course_info(self, course_number):
        formatted_info = f"COURSE {course_number}: {self.department}{self.number}: {self.name}\n" \
                         f"Number of Credits: {self.credits}\n" \
                         f"Days of Lectures: {self.lecture_days}\n" \
                         f"Lecture Time: {self.start_time} - {self.end_time}\n" \
                         f"Stat: on average, students get {self.average_grade}% in this course\n"
        return formatted_info


def main():
    courses = []

    # Read data from the input file and create Course objects
    with open("classesInput.txt", "r") as file:
        num_courses = int(file.readline().strip())

        for _ in range(num_courses):
            department = file.readline().strip()
            number = file.readline().strip()
            name = file.readline().strip()
            credits = int(file.readline().strip())
            lecture_days = file.readline().strip()
            start_time = file.readline().strip()
            end_time = file.readline().strip()
            average_grade = int(file.readline().strip())

            course = Course(department, number, name, credits, lecture_days, start_time, end_time, average_grade)
            courses.append(course)

    # Write formatted course information to the output file
    with open("formatted_schedule.txt", "w") as output_file:
        for i, course in enumerate(courses, start=1):
            output_file.write(course.format_course_info(i))


if __name__ == "__main__":
    main()
