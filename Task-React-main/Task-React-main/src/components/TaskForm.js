import React, { useState } from "react";
import "./TaskForm.css";

function TaskForm({ addTask }) {
  const [task, setTask] = useState({
    title: "",
    description: "",
    dueDate: "",
    status: "Pending",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({ ...prevTask, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.title && task.description) {
      addTask(task);
      setTask({ title: "", description: "", dueDate: "", status: "Pending" });
    }
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Task Title"
        value={task.title}
        onChange={handleChange}
      />
      <textarea
        name="description"
        placeholder="Description"
        value={task.description}
        onChange={handleChange}
      />
      <input
        type="date"
        name="dueDate"
        value={task.dueDate}
        onChange={handleChange}
      />
      <select name="status" value={task.status} onChange={handleChange}>
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
