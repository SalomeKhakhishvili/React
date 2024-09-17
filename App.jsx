import React, { useState } from 'react';
import TaskInput from './TaskInput';
import TaskList from './TaskList';
import './App.css'; 

function ToDoApp() {
  const [todoList, setTodoList] = useState([]);
  const [inProgressList, setInProgressList] = useState([]);
  const [completedList, setCompletedList] = useState([]);

  const addTask = (task) => {
    setTodoList([...todoList, task]);
  };

  const moveToInProgress = (taskIndex) => {
    const task = todoList[taskIndex];
    setTodoList(todoList.filter((_, index) => index !== taskIndex));
    setInProgressList([...inProgressList, task]);
  };

  const moveToCompleted = (taskIndex) => {
    const task = inProgressList[taskIndex];
    setInProgressList(inProgressList.filter((_, index) => index !== taskIndex));
    setCompletedList([...completedList, task]);
  };

  const deleteTask = (taskIndex) => {
    setCompletedList(completedList.filter((_, index) => index !== taskIndex));
  };

  const undoToTodo = (taskIndex) => {
    const task = inProgressList[taskIndex];
    setInProgressList(inProgressList.filter((_, index) => index !== taskIndex));
    setTodoList([...todoList, task]);
  };

  const undoToInProgress = (taskIndex) => {
    const task = completedList[taskIndex];
    setCompletedList(completedList.filter((_, index) => index !== taskIndex));
    setInProgressList([...inProgressList, task]);
  };

  return (
    <div className="app-container">
      <h1 className="title">To Do List</h1>
      <TaskInput addTask={addTask} />
      <div className="columns-container">
        <TaskList
          title="To Do"
          tasks={todoList}
          moveTask={moveToInProgress}
          buttonLabel="დაიწყე"
        />
        <TaskList
          title="In Progress"
          tasks={inProgressList}
          moveTask={moveToCompleted}
          undoTask={undoToTodo}
          buttonLabel="დასრულება"
          undoLabel="უკან დაბრუნება"
        />
        <TaskList
          title="Completed"
          tasks={completedList}
          moveTask={undoToInProgress}
          deleteTask={deleteTask}
          buttonLabel="დაბრუნება"
          deleteLabel="წაშლა"
        />
      </div>
    </div>
  );
}

export default ToDoApp;
