import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import DoneList from './DoneList';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>ToDo App</h1>
        <TodoInput />
        <TodoList />
        <DoneList />
      </div>
    </Provider>
  );
};

export default App;

