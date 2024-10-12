import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const TodoInput = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (input.trim()) {
      dispatch({ type: 'ADD_TODO', payload: input });
      setInput('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="add todo"
      />
      <button onClick={handleAddTodo}>add</button>
    </div>
  );
};

export default TodoInput;
