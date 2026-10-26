import { useState } from "react";
import "./App.css";

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Rahul Patel", course: "BCA" },
    { id: 2, name: "Krishna Shah", course: "BCA" },
    { id: 3, name: "Arjun Mehta", course: "BCA" },
    { id: 4, name: "Rohan Sharma", course: "BCA" },
    { id: 5, name: "Amit Verma", course: "BCA" },
  ]);

  const deleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  return (
    <div className="container">
      <h1>Student Management</h1>
      <p className="subtitle">Practical 19 - Delete Operation</p>

      <h2>Student List</h2>

      {students.length > 0 ? (
        students.map((student) => (
          <div className="student-card" key={student.id}>
            <div className="student-info">
              <h3>{student.name}</h3>
              <p>Course: {student.course}</p>
            </div>

            <button onClick={() => deleteStudent(student.id)}>
              Delete
            </button>
          </div>
        ))
      ) : (
        <p className="empty-message">No students available!</p>
      )}

      <p className="total">
        Total Students: {students.length}
      </p>
    </div>
  );
}

export default App;