import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const completeTask = (index) => {
    const taskToComplete = tasks[index];
    setTasks(tasks.filter((_, i) => i !== index));
    setCompletedTasks([...completedTasks, taskToComplete]);
  };

  const undoTask = (index) => {
    const taskToUndo = completedTasks[index];
    setCompletedTasks(completedTasks.filter((_, i) => i !== index));
    setTasks([...tasks, taskToUndo]);
  };

  const deleteTask = (index) => {
    setCompletedTasks(completedTasks.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <h1>To-Do List</h1>
      <div className="input-group">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="შეიყვანე ახალი დავალება"
        />
        <button onClick={addTask}>დამატება</button>
      </div>
      <div className="columns">
        <div className="column">
          <h2>შესასრულებელი დავალებები</h2>
          <ul>
            {tasks.map((task, index) => (
              <li key={index}>
                {task} 
                <button onClick={() => completeTask(index)}>დასრულება</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="column">
          <h2>შესრულებული დავალებები</h2>
          <ul>
            {completedTasks.map((task, index) => (
              <li key={index}>
                {task} 
                <button onClick={() => undoTask(index)}>გადატანა</button>
                <button onClick={() => deleteTask(index)}>წაშლა</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;

