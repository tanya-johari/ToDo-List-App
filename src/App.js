import { useState } from "react";
import Header from "./Header/Header";
import "./styles.css";
import ToDoList from "./ToDoList/ToDoList";

const todoitems = ["Read SpringBoot", "Complete assignments", "Prepare breakfast", 
"Sleep for 2 hours", "Take a shower", "Buy groceries"]; // Your ToDoList items

export default function App() {

  const [todos, setTodos] = useState(todoitems);

  return (
    <div className="Application">
      <Header />
      <ToDoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}
