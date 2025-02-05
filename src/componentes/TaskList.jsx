import React from "react";
import TaskItem from "./TaskItem";
import "../estilos/Taskitem.css";

function TaskList({ tasks, onUpdateTask, onDeleteTask }) {
  return (
    <ul className="task-list">
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          onDeleteTask={() => onDeleteTask(index)}
          onUpdateTask={(newTask) => onUpdateTask(index, newTask)}
        />
      ))}
    </ul>
  );
}

export default TaskList;
