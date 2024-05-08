import React from 'react';

export default function ToDoItem({ text, completed, onToggleCompleted }) {
  const handleToggleCompleted = () => {
    onToggleCompleted(text);
  };

  return (
    <li
      className={`todo-item ${completed ? 'completed' : ''}`}
      onClick={handleToggleCompleted}
      style={{ cursor: completed ? 'default' : 'pointer' }}
    >
      {text}
    </li>
  );
}
