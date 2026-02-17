// frontend/src/components/Header.js

export function Header({ onAddTask }) {
  const today = new Date().toLocaleDateString(undefined, {
    weekday: "long",
    month: "short",
    day: "numeric",
  });

  return (
    <header className="flex items-center justify-between px-8 py-4 border-b bg-white">
      <div>
        <p className="text-sm text-gray-500">{today}</p>
        <h1 className="text-xl font-semibold">Dashboard</h1>
      </div>

      <button
        onClick={onAddTask}
        className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
      >
        + Add Task
      </button>
    </header>
  );
}
