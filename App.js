// src/App.js
import React, { useState } from 'react';
import useFetch from './useFetch';
import TaskList from './TaskList';
import TaskForm from './TaskForm';

const App = () => {
    const { data: tasks, loading, error } = useFetch('https://crudapi.co.uk/api/v1/tasks');
    const [taskList, setTaskList] = useState(tasks);

    const addTask = (task) => {
        setTaskList([...taskList, task]);
    };

    const toggleComplete = (id) => {
        setTaskList(taskList.map(task => (task.id === id ? { ...task, isCompleted: !task.isCompleted } : task)));
    };

    const editTask = (task) => {
        // Implement edit functionality as needed
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
            <h1>TODO App</h1>
            <TaskForm addTask={addTask} />
            <TaskList tasks={taskList} toggleComplete={toggleComplete} editTask={editTask} />
        </div>
    );
};

export default App;
