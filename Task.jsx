import React from 'react';
import { Link } from 'react-router-dom';

const Task = ({ task, toggleComplete, deleteTask }) => {
    return (
        <li>
            <div>
                <span style={{ textDecoration: task.isCompleted ? 'line-through' : 'none' }}>
                    {task.name} - {task.assignee} - {task.deadline}
                </span>
                <p>{task.additionalInfo}</p>
            </div>
            <div>
                <button onClick={() => toggleComplete(task.id, task.isCompleted)}>
                    {task.isCompleted ? 'Mark as Incomplete' : 'Mark as Complete'}
                </button>
                <Link to={`/edit-task/${task.id}`}>
                    <button>Edit</button>
                </Link>
                <button onClick={() => deleteTask(task.id)}>Delete</button>
            </div>
        </li>
    );
};

export default Task;
