import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>ToDo List</h2>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <span style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>{todo.text}</span>
            <button onClick={() => dispatch({ type: 'TOGGLE_TODO', payload: index })}>
              Done
            </button>
            <button onClick={() => dispatch({ type: 'DELETE_TODO', payload: index })}>
              delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
