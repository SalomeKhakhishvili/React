import React, { useState, useEffect } from 'react';
const TaskForm = ({ initialTask, onSubmit }) => {
    const [name, setName] = useState(initialTask?.name || '');
    const [isCompleted, setIsCompleted] = useState(initialTask?.isCompleted || false);
    const [deadline, setDeadline] = useState(initialTask?.deadline || '');
    const [assignee, setAssignee] = useState(initialTask?.assignee || '');
    const [additionalInfo, setAdditionalInfo] = useState(initialTask?.additionalInfo || '');
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ name, isCompleted, deadline, assignee, additionalInfo });
    };
      return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Task name"
                required
            />
            <label>
                <input 
                    type="checkbox"
                    checked={isCompleted}
                    onChange={() => setIsCompleted(!isCompleted)}
                />
                Completed
            </label>
            <input type="date"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
                placeholder="Deadline"
            />
            <input
                type="text"
                value={assignee}
                onChange={(e) => setAssignee(e.target.value)}
                placeholder="Assignee"
            />
            <textarea
                value={additionalInfo}
                onChange={(e) => setAdditionalInfo(e.target.value)}
                placeholder="Additional Info"
            />
            <button type="submit">Save Task</button>
        </form>
    );
};

export default TaskForm;

