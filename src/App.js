import React, { useState } from 'react';
import TodoList from './TodoList';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Faire les courses', completed: false },
    { id: 2, text: 'Préparer le dîner', completed: true },
  ]);

  const addTask = (text) => {
    const newTask = { id: tasks.length + 1, text, completed: false };
    setTasks([...tasks, newTask]);
  };

  const completeTask = (taskId) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h1>My To-do List</h1>
      <TodoList tasks={tasks} addTask={addTask} completeTask={completeTask} deleteTask={deleteTask} />
    </div>
  );
}

export default App;