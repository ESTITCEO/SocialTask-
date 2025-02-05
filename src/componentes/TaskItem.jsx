import React, { useState } from "react";
import { FiTrash, FiEdit } from "react-icons/fi";
import "../estilos/Taskitem.css";

function TaskItem({ task, onDeleteTask, onUpdateTask }) {
        const [isEditing, setIsEditing] = useState(false);
        const [currentEdit, setCurrentEdit] = useState(task);

        const handleUpdateClick = () => {
    if (currentEdit.trim()) {
        onUpdateTask(currentEdit);
        setIsEditing(false);
    }
    };

  return (
    <li className="task-item">
      {isEditing ? (
        <div className="task-edit">
          <input
            type="text"
            value={currentEdit}
            onChange={(e) => setCurrentEdit(e.target.value)}
          />
          <button onClick={handleUpdateClick}>Actualizar</button>
          <button onClick={() => setIsEditing(false)}>Cancelar</button>
        </div>
      ) : (
        <>
          <span>{task}</span>
          <div className="task-actions">
            <button onClick={() => setIsEditing(true)}>
              <FiEdit size={20} />
            </button>
            <button onClick={onDeleteTask}>
              <FiTrash size={20} />
            </button>
          </div>
        </>
      )}
    </li>
  );
}

export default TaskItem;
