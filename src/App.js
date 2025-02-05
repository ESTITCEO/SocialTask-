import React, { useState } from "react";
import Header from "./componentes/Header";
import TaskForm from "./componentes/TaskForm";
import TaskList from "./componentes/TaskList"
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const updateTask = (index, newTask) => {
    const updatedTasks = tasks.map((task, i) => (i === index ? newTask : task));
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <Header />
      <div className="container">
        <TaskForm onAddTask={addTask} />
        <TaskList
          tasks={tasks}
          onUpdateTask={updateTask}
          onDeleteTask={deleteTask}
        />
      </div>
    </div>
  );
}
export default App;