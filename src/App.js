import Header from "./Header/Header";
import "./styles.css";
import ToDoList from "./ToDoList/ToDoList";

const todoitmes = ["Read SpringBoot", "Complete assignments", "Prepare breakfast", 
"Sleep for 2 hours", "Take a shower", "Buy groceries"]; // Your ToDoList items

export default function App() {
  return (
    <div className="Application">
      <Header />
      <ToDoList todos={todoitmes} />
    </div>
  );
}
