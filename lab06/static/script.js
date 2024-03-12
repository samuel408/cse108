function getGrade() {
    const studentName = document.getElementById('studentName').value;
    fetch(`https://amhep.pythonanywhere.com/grades/${studentName}`)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                document.getElementById('gradeResult').innerText = data.error;
            } else {
                document.getElementById('gradeResult').innerText = `Grade for ${studentName}: ${data[studentName]}`;
            }
        })
        .catch(error => console.error('Error:', error));
}

function getAllGrades() {
    fetch('https://amhep.pythonanywhere.com/grades')
        .then(response => response.json())
        .then(data => {
            const allGradesTable = document.getElementById('allGradesTable');
            allGradesTable.innerHTML = '';
            for (const student in data) {
                const row = `<tr><td>${student}</td><td>${data[student]}</td></tr>`;
                allGradesTable.innerHTML += row;
            }
        })
        .catch(error => console.error('Error:', error));
}

function addGrade() {
    const newStudentName = document.getElementById('newStudentName').value;
    const newGrade = document.getElementById('newGrade').value;
    const requestData = { name: newStudentName, grade: parseFloat(newGrade) };
    fetch('https://amhep.pythonanywhere.com/grades', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestData)
    })
    .then(response => response.json())
    .then(data => console.log('Grade added:', data))
    .catch(error => console.error('Error:', error));
}

function editGrade() {
    const editStudentName = document.getElementById('editStudentName').value;
    const editGrade = document.getElementById('editGrade').value;
    const requestData = { grade: parseFloat(editGrade) };
    fetch(`https://amhep.pythonanywhere.com/grades/${editStudentName}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestData)
    })
    .then(response => response.json())
    .then(data => console.log('Grade edited:', data))
    .catch(error => console.error('Error:', error));
}

function deleteGrade() {
    const deleteStudentName = document.getElementById('deleteStudentName').value;
    fetch(`https://amhep.pythonanywhere.com/grades/${deleteStudentName}`, {
        method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => console.log('Grade deleted:', data))
    .catch(error => console.error('Error:', error));
}
