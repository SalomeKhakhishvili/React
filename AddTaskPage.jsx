import React from 'react';
import { useHistory } from 'react-router-dom';
import TaskForm from '../components/TaskForm';

const AddTaskPage = () => {
    const history = useHistory();

    const addTask = async (task) => {
        const response = await fetch('https://crudapi.co.uk/api/v1/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.REACT_APP_CRUD_API_KEY}`,
            },
            body: JSON.stringify(task),
        });

        if (response.ok) {
            history.push('/');
        }
    };

    return (
        <div>
            <h1>Add Task</h1>
            <TaskForm onSubmit={addTask} />
        </div>
    );
};

export default AddTaskPage;
