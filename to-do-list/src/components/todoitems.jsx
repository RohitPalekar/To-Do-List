import { X, Pencil } from "lucide-react"; // Delete and Edit Icon import
import { useState } from "react";

export default function ToDoItem({ task, onDelete, onToggle, onEdit }) {

  const [isEditing, setIsEditing] = useState(false); // To track tasks
  const [editedText, setEditedText] = useState(task.text); // To store text in editing

  // To save edited task
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && editedText.trim() !== "") {
      onEdit(task.id, editedText.trim());
      setIsEditing(false);
    }
  };

  return (
    <div className="flex items-center gap-3 py-3">
      {/* Checkbox to mark as complete */}
      <button
        onClick={() => onToggle(task.id)}
        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
          task.completed
            ? "bg-red-500 border-red-500"
            : "border-gray-300 hover:border-gray-400"
        }`}
      >
        {/* To tick completed svg used */}
        {task.completed && (
          <svg
            className="w-4 h-4 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </button>

      {/* Task or Editable Input */}
      {isEditing ? (
      
        <input
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
          onKeyDown={handleKeyDown}
          autoFocus
          className="flex-1 text-lg px-2 py-1 border rounded"
        />
      ) : (
        // Task
        <span className="flex-1 text-lg text-gray-800">
          {task.text}
        </span>
      )}

      {/* Edit button edit task */}
      <button
        onClick={() => setIsEditing(true)}
        className="text-gray-400 hover:text-blue-500 transition-colors"
        aria-label="Edit task"
      >
        <Pencil size={18} />
      </button>

      {/* Delete button which deletes task after clicking */}
      <button
        onClick={() => onDelete(task.id)}
        className="text-gray-400 hover:text-gray-600 transition-colors"
        aria-label="Delete task"
      >
        <X size={20} />
      </button>
    </div>
  );
}
