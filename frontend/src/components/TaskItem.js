// frontend/src/components/TaskItem.js

export default function TaskItem({ task, onToggle }) {
  return (
    <div className="flex items-center gap-3 p-3 border rounded">
      <input
        type="checkbox"
        checked={task.status === "completed"}
        onChange={() => onToggle(task.id, task.status)}
      />
      <span
        className={`flex-1 ${
          task.status === "completed"
            ? "line-through text-gray-400"
            : "text-black"
        }`}
      >
        {task.title}
      </span>
    </div>
  );
}
