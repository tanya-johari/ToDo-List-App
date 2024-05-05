import { useState } from "react";
import Header from "./Header/Header";
import "./styles.css";
import ToDoList from "./ToDoList/ToDoList";

const todoitems = ["Read SpringBoot", "Complete assignments", "Prepare breakfast", 
"Sleep for 2 hours", "Take a shower", "Buy groceries"]; // Your ToDoList items

export default function App() {

  const [todos, setTodos] = useState(todoitems);
  const [newTask, setNewTask] = useState('');

  const addTodo = (text) =>{
    if (text.trim()) { // Check if input is not empty
      setTodos((todoitems) => [...todoitems, text]);
      setNewTask(''); // Clear the input field after adding the task
    }
  };

  return (
    <div className="App">
      <Header />
      <form onSubmit={(e) => e.preventDefault()}>  {/* Prevent default form submission */}
      <input
        type="text"
        placeholder="Add a new task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button type="button" onClick={() => addTodo(newTask)}>  {/* Button type set to button */}
        Add Task
      </button>
    </form>
      <ToDoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}
