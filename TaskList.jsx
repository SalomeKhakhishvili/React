// src/components/Task.js
import React from 'react';

const Task = ({ task, toggleComplete, editTask }) => {
    const handleToggle = async () => {
        const updatedTask = { ...task, isCompleted: !task.isCompleted };
        
        const response = await fetch(`https://crudapi.co.uk/api/v1/tasks/${task.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.REACT_APP_CRUD_API_KEY}`,
            },
            body: JSON.stringify(updatedTask),
        });

        if (response.ok) {
            toggleComplete(task.id);
        }
    };

    return (
        <div>
            <span style={{ textDecoration: task.isCompleted ? 'line-through' : 'none' }}>
                {task.name}
            </span>
            <button onClick={handleToggle}>
                {task.isCompleted ? 'Undo' : 'Complete'}
            </button>
            <button onClick={() => editTask(task)}>Edit</button>
        </div>
    );
};

export default Task;
