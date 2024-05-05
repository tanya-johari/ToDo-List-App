import React from 'react';

const ToDoList = ({ todos, setTodos }) => {

  const isEmpty = todos.length === 0; // Check if the list is empty

  const handleEmptyAll = () => {
    setTodos([]); // Set todos to an empty array to clear the list
  };

  return (
    <>
      <ul className="todo-list">
        {isEmpty ? (
          <li><i>Nothing to do buddy. Sleep!</i></li>
        ) : (todos.map((todo, index) => (
            <li key={index} className="todo-item">{todo}</li>
          )))}
      </ul>
      <button className="btn-empty" onClick={handleEmptyAll}>
        Empty
      </button>
    </>
  );
};

export default ToDoList;
