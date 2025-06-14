import { useState } from "react";
import Header from "./components/header";
import ToDoList from "./components/todolist";
import "./index.css";

export default function App() {
  // All tasks
  const [tasks, setTasks] = useState([]);
  // To handle Input field
  const [inputValue, setInputValue] = useState("");

  // To add a new task
  function addTask() {
    // If input is empty and also remove any whitespace
    if (inputValue.trim() === "") return;

    // Creating a new task object with a unique id using date
    const task = {
      id: Date.now(),
      text: inputValue,
      completed: false, // For tick complete
    };

    // It add task to the list
    setTasks((prev) => [...prev, task]);
    // it will Clear the input
    setInputValue("");
  }

  // To edit task 
  function editTask(taskId, newText) {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskId ? { ...task, text: newText } : task
      )
    );
  }
  // Removes a task by id
  function deleteTask(taskId) {
    setTasks((prev) => prev.filter((task) => task.id !== taskId));
  }

  // To mark Completed
  function Completed(taskId) {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 to-blue-700">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 shadow-2xl">
        <Header />
        <div className="flex gap-3 mb-6">
          <input
            type="text"
            value={inputValue}
            placeholder="Add task here"
            className="flex-1 px-4 py-3 bg-gray-100 rounded-full text-gray-700 placeholder-gray-500 focus:outline-none focus:bg-white focus:ring-2 focus:ring-red-200"
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addTask()}
          />
          <button
            onClick={addTask}
            className="px-8 py-3 bg-red-500 text-white rounded-full hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-200 transition-colors font-medium"
          >
            Add
          </button>
        </div>
        <ToDoList
          tasks={tasks}
          onDelete={deleteTask}
          onToggle={Completed}
          onEdit={editTask}
        />
      </div>
    </div>
  );
}
