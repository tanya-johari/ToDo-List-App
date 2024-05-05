import React from 'react';
import { useState } from 'react';

const tickEmoji = '✅';
const emptyCheckbox = '◻️';

const ToDoList = ({ todos, setTodos }) => {

  const isEmpty = todos.length === 0; // Check if the list is empty

  const [completedList, setCompletedList] = useState(
    todos.map(() => false) // Initialize completedList with false for each todo
  );

  const handleEmptyAll = () => {
    setTodos([]); // Set todos to an empty array to clear the list
  };

  const toggleCompleted = (index) => {
    setCompletedList((prevCompletedList) => {
      const updatedCompletedList = [...prevCompletedList];
      updatedCompletedList[index] = !prevCompletedList[index];
      return updatedCompletedList;
    });
  };

  const handleRemoveCompleted = () => {
    setTodos((prevTodos) => prevTodos.filter((_, index) => !completedList[index]));
  };

  return (
    <>
      <ul className="todo-list">
        {isEmpty ? (
          <li><i>Nothing to do buddy. Sleep!</i></li>
        ) : (todos.map((todo, index) => (
          <li key={index}
            style={{ ...completedList[index] ? { textDecoration: 'line-through' } : {}, cursor: 'pointer' }}
            className="todo-item"
            completed={completedList[index] ? 'true' : 'false'}>
            {todo}
            <button className="btn-mark" onClick={() => toggleCompleted(index)}>
               {completedList[index] ? tickEmoji : emptyCheckbox }
            </button>
          </li>
        )))}
      </ul>
      <button 
        className="btn-empty"
        onClick={completedList.some(completed => completed) ? handleRemoveCompleted : handleEmptyAll}>
        {completedList.some(completed => completed) ? 'Remove Completed' : 'Empty'}
      </button>
    </>
  );
};

export default ToDoList;
