// frontend/src/components/TaskList.js

import TaskItem from "./TaskItem";

export default function TaskList({ tasks, onToggle }) {
  if (!tasks.length) {
    return <p className="text-gray-400">No tasks yet.</p>;
  }

  return (
    <div className="space-y-3">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onToggle={onToggle} />
      ))}
    </div>
  );
}
