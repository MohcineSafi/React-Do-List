import React, { useState } from 'react';
import TodoItem from './TodoItem';
import './App.css';

function TodoList({ tasks, addTask, completeTask, deleteTask }) {
  const [newTaskText, setNewTaskText] = useState('');

  const handleAddTask = () => {
    if (newTaskText.trim() !== '') {
      addTask(newTaskText);
      setNewTaskText('');
    }
  };

  return (
    <div className="TodoList">
      <ul>
        {tasks.map(task => (
          <TodoItem key={task.id} task={task} completeTask={completeTask} deleteTask={deleteTask} />
        ))}
      </ul>
      <div>
        <input type="text" value={newTaskText} onChange={e => setNewTaskText(e.target.value)} />
        <button onClick={handleAddTask}>Ajouter</button>
      </div>
    </div>
  );
}

export default TodoList;