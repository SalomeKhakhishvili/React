import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Task from '../components/Task';

const TaskListPage = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchTasks = async () => {
            const response = await fetch('https://crudapi.co.uk/api/v1/tasks', {
                headers: {
                    'Authorization': `Bearer ${process.env.REACT_APP_CRUD_API_KEY}`,
                },
            });
            const data = await response.json();
            setTasks(data);
        };
        fetchTasks();
    }, []);

    const deleteTask = async (id) => {
        const response = await fetch(`https://crudapi.co.uk/api/v1/tasks/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${process.env.REACT_APP_CRUD_API_KEY}`,
            },
        });

        if (response.ok) {
            setTasks(tasks.filter((task) => task.id !== id));
        }
    };

    const toggleComplete = async (id, isCompleted) => {
        const response = await fetch(`https://crudapi.co.uk/api/v1/tasks/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.REACT_APP_CRUD_API_KEY}`,
            },
            body: JSON.stringify({ isCompleted: !isCompleted }),
        });

        if (response.ok) {
            setTasks(tasks.map((task) =>
                task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
            ));
        }
    };

    return (
        <div>
            <h1>Task List</h1>
            <Link to="/add-task">Add New Task</Link>
            <ul>
                {tasks.map((task) => (
                    <Task
                        key={task.id}
                        task={task}
                        toggleComplete={toggleComplete}
                        deleteTask={deleteTask}
                    />
                ))}
            </ul>
        </div>
    );
};

export default TaskListPage;
