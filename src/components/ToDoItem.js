import React from 'react';

export default function ToDoItem({ text, completed, onToggleCompleted }) {
  const handleToggleCompleted = () => {
    onToggleCompleted(text);
  };

  return (
    <li
      className={`todo-item ${completed ? 'completed' : ''}`}
      onClick={handleToggleCompleted}
      data-testid="todo-item-checkbox"
      style={{ cursor: completed ? 'default' : 'pointer', textDecoration: completed ? 'line-through' : 'none' }}
    >
      {text}
    </li>
  );
}
