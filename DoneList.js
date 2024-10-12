import React from 'react';
import { useSelector } from 'react-redux';

const DoneList = () => {
  const todos = useSelector((state) => state.todos);

  const doneTodos = todos.filter(todo => todo.done);

  return (
    <div>
      <h2>Done Items</h2>
      <ul>
        {doneTodos.map((todo, index) => (
          <li key={index}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default DoneList;
