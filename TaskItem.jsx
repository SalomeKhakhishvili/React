import React from 'react';

function TaskItem({ task, index, moveTask, undoTask, deleteTask, buttonLabel, undoLabel, deleteLabel }) {
  return (
    <li className="task-item">
      {task}
      {moveTask && (
        <button className="move-button" onClick={() => moveTask(index)}>
          {buttonLabel}
        </button>
      )}
      {undoTask && (
        <button className="move-button" onClick={() => undoTask(index)}>
          {undoLabel}
        </button>
      )}
      {deleteTask && (
        <button className="delete-button" onClick={() => deleteTask(index)}>
          {deleteLabel}
        </button>
      )}
    </li>
  );
}

export default TaskItem;
