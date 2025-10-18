import { useState } from "react";

function Todo() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  // Add new task
  const addTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, task]);
    setTask(""); // clear input
  };

  // Delete task by index
  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div style={styles.container}>
      <h1>✅ To-Do List</h1>

      <div style={styles.inputBox}>
        <input
          type="text"
          value={task}
          placeholder="Enter a task..."
          onChange={(e) => setTask(e.target.value)}
          style={styles.input}
        />
        <button onClick={addTask} style={styles.addBtn}>Add</button>
      </div>

      <ul style={styles.list}>
        {tasks.map((t, index) => (
          <li key={index} style={styles.listItem}>
            {t}
            <button onClick={() => deleteTask(index)} style={styles.deleteBtn}>
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ✅ Inline CSS styles
const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    marginTop: "50px",
  },
  inputBox: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px",
  },
  input: {
    padding: "10px",
    width: "250px",
    fontSize: "1rem",
    border: "1px solid #ccc",
    borderRadius: "5px 0 0 5px",
    outline: "none",
  },
  addBtn: {
    padding: "10px 20px",
    fontSize: "1rem",
    background: "#28a745",
    color: "white",
    border: "none",
    borderRadius: "0 5px 5px 0",
    cursor: "pointer",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "300px",
    margin: "10px auto",
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    background: "#f9f9f9",
  },
  deleteBtn: {
    background: "transparent",
    border: "none",
    cursor: "pointer",
    fontSize: "1.2rem",
  },
};

export default Todo;
