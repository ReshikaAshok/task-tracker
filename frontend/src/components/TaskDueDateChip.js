// frontend/src/components/TaskDueDateChip.js

export default function TaskDueDateChip({ dueDate }) {
  if (!dueDate) return null;

  const isToday = dueDate === "Today";
  const isOverdue = dueDate === "Overdue";

  const base =
    "text-xs px-2 py-1 rounded-full font-medium";

  const style = isOverdue
    ? "bg-red-100 text-red-700"
    : isToday
    ? "bg-blue-100 text-blue-700"
    : "bg-gray-100 text-gray-600";

  return (
    <span className={`${base} ${style}`}>
      {dueDate}
    </span>
  );
}
