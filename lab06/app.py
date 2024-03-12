from flask import Flask, render_template, request, jsonify
from flask_cors import CORS


app = Flask(__name__)
CORS(app)  # Enable CORS for all routes
# Dummy data to simulate a database
grades = {}

@app.route('/')
def index():
    return render_template('templates/index.html')

# REST API endpoints
@app.route('/api/grades', methods=['GET'])
def get_all_grades():
    return jsonify(grades)

@app.route('/api/grades/<string:student_name>', methods=['GET'])
def get_grade_by_name(student_name):
    if student_name in grades:
        return jsonify({student_name: grades[student_name]})
    else:
        return jsonify({"error": "Student not found"}), 404

@app.route('/api/grades', methods=['POST'])
def add_grade():
    data = request.get_json()
    if 'name' in data and 'grade' in data:
        student_name = data['name']
        grade = data['grade']
        grades[student_name] = grade
        return jsonify({student_name: grade}), 201
    else:
        return jsonify({"error": "Invalid request, missing name or grade"}), 400

@app.route('/api/grades/<string:student_name>', methods=['PUT'])
def update_grade(student_name):
    if student_name in grades:
        data = request.get_json()
        if 'grade' in data:
            grades[student_name] = data['grade']
            return jsonify({student_name: grades[student_name]})
        else:
            return jsonify({"error": "Invalid request, missing grade"}), 400
    else:
        return jsonify({"error": "Student not found"}), 404

@app.route('/api/grades/<string:student_name>', methods=['DELETE'])
def delete_grade(student_name):
    if student_name in grades:
        del grades[student_name]
        return jsonify({"message": "Grade deleted successfully"}), 200
    else:
        return jsonify({"error": "Student not found"}), 404

if __name__ == '__main__':
    app.run(debug=True)
