import React from 'react';
import './App.css';

function TodoItem({ task, completeTask, deleteTask }) {
  return (
    <li className="TodoItem">
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.text}
      </span>
      <button onClick={() => completeTask(task.id)}>Terminé</button>
      <button onClick={() => deleteTask(task.id)}>Supprimer</button>
    </li>
  );
}

export default TodoItem;