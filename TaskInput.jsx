import React, { useState } from 'react';

function TaskInput({ addTask }) {
  const [task, setTask] = useState('');

  const handleAddTask = () => {
    if (task.trim()) {
      addTask(task);
      setTask('');
    }
  };

  return (
    <div className="input-container">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="შეიყვანეთ დავალება"
      />
      <button className="add-button" onClick={handleAddTask}>
        დავალების დამატება
      </button>
    </div>
  );
}

export default TaskInput;
