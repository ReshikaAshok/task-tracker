// frontend/src/components/TaskPriorityBadge.js

const COLORS = {
  high: "bg-red-100 text-red-700",
  medium: "bg-yellow-100 text-yellow-700",
  low: "bg-green-100 text-green-700",
};

export default function TaskPriorityBadge({ priority }) {
  if (!priority) return null;

  return (
    <span
      className={`text-xs px-2 py-1 rounded-full font-medium ${COLORS[priority]}`}
    >
      {priority.toUpperCase()}
    </span>
  );
}
