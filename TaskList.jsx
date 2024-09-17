import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ title, tasks, moveTask, undoTask, deleteTask, buttonLabel, undoLabel, deleteLabel }) {
  return (
    <div className="column">
      <h2>{title}</h2>
      <ul>
        {tasks.map((task, index) => (
          <TaskItem
            key={index}
            task={task}
            index={index}
            moveTask={moveTask}
            undoTask={undoTask}
            deleteTask={deleteTask}
            buttonLabel={buttonLabel}
            undoLabel={undoLabel}
            deleteLabel={deleteLabel}
          />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
