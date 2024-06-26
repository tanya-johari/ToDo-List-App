import React, { useState, useEffect } from 'react';
import Header from './Header';
import ToDoItem from './ToDoItem';

const oldtodos = [
  { text: "Read SpringBoot", completed: false },
  { text: "Complete assignments", completed: false },
  { text: "Prepare breakfast", completed: false },
  { text: "Sleep for 2 hours", completed: false },
  { text: "Take a shower", completed: false }
];

export default function ToDoList() {
  const [todos, setTodos] = useState([]);
  const [newTask, setNewTask] = useState('');

  const saveToLocalStorage = (todos, newTask) => {
    localStorage.setItem('todos', JSON.stringify({ todos, newTask }));
  };

  const loadFromLocalStorage = () => {
    const storedData = localStorage.getItem('todos');
    if (!storedData) return { todos: oldtodos, newTask: '' };

    const { todos, newTask } = JSON.parse(storedData);
    return { todos: todos || oldtodos, newTask: newTask || '' };
  };

  const addTodo = () => {
    if (newTask.trim()) {
      setTodos((prevTodos) => [...prevTodos, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const toggleCompleted = (text) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.text === text ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeCompletedTodos = () => {
    setTodos((prevTodos) => prevTodos.filter((todo) => !todo.completed));
  };

  const emptyList = () => {
    setTodos([]);
  };

  useEffect(() => {
    const { todos, newTask } = loadFromLocalStorage();
    setTodos(todos);
    setNewTask(newTask);
  }, []);

  useEffect(() => {
    saveToLocalStorage(todos, newTask);
  }, [todos, newTask]);

  return (
    <div className="todo-list-container">
      <Header />
      <div className="todo-input-container">
        <input
          type="text"
          placeholder="Add a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          data-testid="todo-input"
        />
        <button className="btn-add" type="button" onClick={addTodo}>
          Add Task
        </button>
      </div>
      <ul className="todo-list">
        {todos.length === 0 ? (
          <li className="empty-message">
            <i>Nothing to do buddy. Sleep!😴</i>
          </li>
        ) : (
          todos.map((todo) => (
            <ToDoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onToggleCompleted={toggleCompleted}
            />
          ))
        )}
      </ul>
      {todos.length > 0 && (
        <div className="btn-container">
          {todos.some((todo) => todo.completed) && (
            <button className="btn-remove" type="button" onClick={removeCompletedTodos}>
              Remove Completed
            </button>
          )}
          <button className="btn-empty" type="button" onClick={emptyList}>
            Empty
          </button>
        </div>
      )}
    </div>
  );
}
