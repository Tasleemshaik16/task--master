import React from "react";
import "./TaskList.css";

function TaskList({ tasks, editTask, deleteTask }) {
  return (
    <div className="task-list">
      {tasks.map((task, index) => (
        <div className="task-card" key={index}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>Due: {task.dueDate || "No due date"}</p>
          <p className="status">Status: {task.status}</p>
          <button
            className="edit"
            onClick={() => editTask(index)}
          >
            Edit
          </button>
          <button
            className="delete"
            onClick={() => deleteTask(index)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
