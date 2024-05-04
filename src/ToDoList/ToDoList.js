import React from 'react';

const ToDoList = ({ todos }) => {
  return (
    <ul className="todo-list">
      {/* Display only the first 5 ToDoItems */}
      {todos.slice(0, 5).map((todo, index) => (
        <li key={index} className="todo-item">{todo}</li>
      ))}
    </ul>
  );
};

export default ToDoList;
