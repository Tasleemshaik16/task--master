import React, { useState } from "react";
import FilterBar from "./components/FilterBar";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]); // State to store tasks
  const [statusFilter, setStatusFilter] = useState("All");

  // Function to add a new task
  const addTask = (task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  // Function to edit a task (placeholder for now)
  const editTask = (index) => {
    const taskToEdit = tasks[index];
    const updatedTitle = prompt("Edit task title:", taskToEdit.title);
    if (updatedTitle) {
      setTasks((prevTasks) =>
        prevTasks.map((task, i) =>
          i === index ? { ...task, title: updatedTitle } : task
        )
      );
    }
  };

  // Function to delete a task
  const deleteTask = (index) => {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  };

  // Filter tasks based on status
  const filteredTasks =
    statusFilter === "All"
      ? tasks
      : tasks.filter((task) => task.status === statusFilter);

  return (
    <div className="app">
      <h1>Task Manager</h1>
      <TaskForm addTask={addTask} />
      <FilterBar statusFilter={statusFilter} setStatusFilter={setStatusFilter} />
      <TaskList
        tasks={filteredTasks}
        editTask={editTask}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;
