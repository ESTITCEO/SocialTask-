import React, { useState } from "react";
import "../estilos/TaskForm.css";
import { IoWaterOutline } from "react-icons/io5";

function TaskForm({ onAddTask }) {
  const [task, setTask] = useState("");
  const [error, setError] = useState(""); // Estado para manejar errores

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      onAddTask(task);
      setTask("");
      setError(""); // Limpia el error si se añade la tarea
    } else {
      setError("Por favor, añade una tarea válida.");
    }
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Añade una nueva tarea..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="submit">Añadir</button>
      <IoWaterOutline size={28} />
      {error && <p className="error">{error}</p>}
    </form>
  );
}

export default TaskForm;
