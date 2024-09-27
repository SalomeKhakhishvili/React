import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import TaskForm from '../components/TaskForm';

const EditTaskPage = () => {
    const { id } = useParams();
    const [task, setTask] = useState(null);
    const history = useHistory();

    useEffect(() => {
        const fetchTask = async () => {
            const response = await fetch(`https://crudapi.co.uk/api/v1/tasks/${id}`, {
                headers: {
                    'Authorization': `Bearer ${process.env.REACT_APP_CRUD_API_KEY}`,
                },
            });
            const data = await response.json();
            setTask(data);
        };
        fetchTask();
    }, [id]);

    const editTask = async (updatedTask) => {
        const response = await fetch(`https://crudapi.co.uk/api/v1/tasks/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.REACT_APP_CRUD_API_KEY}`,
            },
            body: JSON.stringify(updatedTask),
        });

        if (response.ok) {
            history.push('/');
        }
    };

    if (!task) return <div>Loading...</div>;

    return (
        <div>
            <h1>Edit Task</h1>
            <TaskForm initialTask={task} onSubmit={editTask} />
        </div>
    );
};

export default EditTaskPage;
