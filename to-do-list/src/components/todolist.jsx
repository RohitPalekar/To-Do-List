import ToDoItem from "./todoitems";

export default function ToDoList({ tasks, onDelete, onToggle, onEdit }) {
  //  Here done loop over all tasks to display them with ToDoItem
  return (
    <div className="space-y-2">
      {tasks.map(task => (
        <ToDoItem
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}
