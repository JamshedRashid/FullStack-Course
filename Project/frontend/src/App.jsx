import { useEffect, useState } from "react";
import "./App.css";

const API_URL = "http://localhost:5001/api/courses";

function App() {
  const [courses, setCourses] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("Not Started");
  const [date, setDate] = useState("");
  const [editingId, setEditingId] = useState(null);

  const fetchCourses = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setCourses(data);
    } catch (error) {
      console.log("Failed to fetch courses:", error);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setStatus("Not Started");
    setDate("");
    setEditingId(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const courseData = {
      title,
      description,
      status,
      date,
    };

    try {
      if (editingId) {
        const response = await fetch(`${API_URL}/${editingId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(courseData),
        });

        const updatedCourse = await response.json();

        setCourses(
          courses.map((course) =>
            course._id === editingId ? updatedCourse : course
          )
        );

        resetForm();
      } else {
        const response = await fetch(API_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(courseData),
        });

        const savedCourse = await response.json();
        setCourses([savedCourse, ...courses]);

        resetForm();
      }
    } catch (error) {
      console.log("Failed to save course:", error);
    }
  };

  const startEdit = (course) => {
    setEditingId(course._id);
    setTitle(course.title);
    setDescription(course.description);
    setStatus(course.status);
    setDate(course.date);
  };

  const deleteCourse = async (id) => {
    try {
      await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });

      setCourses(courses.filter((course) => course._id !== id));
    } catch (error) {
      console.log("Failed to delete course:", error);
    }
  };

  return (
    <div className="app">
      <h1>MERN Course Tracker</h1>
      <p className="subtitle">
        Track your learning progress for the Full Stack course.
      </p>

      <form onSubmit={handleSubmit} className="course-form">
        <input
          type="text"
          placeholder="Course topic title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <textarea
          placeholder="What did you learn?"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option>Not Started</option>
          <option>In Progress</option>
          <option>Completed</option>
        </select>

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />

        <button type="submit">
          {editingId ? "Update Course Item" : "Add Course Item"}
        </button>

        {editingId && (
          <button type="button" className="cancel-button" onClick={resetForm}>
            Cancel Edit
          </button>
        )}
      </form>

      <div className="course-list">
        <h2>Course Items</h2>

        {courses.length === 0 ? (
          <p>No course items added yet.</p>
        ) : (
          courses.map((course) => (
            <div className="course-card" key={course._id}>
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <p>
                <strong>Status:</strong> {course.status}
              </p>
              <p>
                <strong>Date:</strong> {course.date}
              </p>

              <div className="button-group">
                <button className="edit-button" onClick={() => startEdit(course)}>
                  Edit
                </button>

                <button
                  className="delete-button"
                  onClick={() => deleteCourse(course._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;