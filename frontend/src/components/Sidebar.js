// frontend/src/components/Sidebar.js

const views = [
  { key: "today", label: "Today" },
  { key: "week", label: "This Week" },
  { key: "overdue", label: "Overdue" },
  { key: "priority", label: "High Priority" },
  { key: "completed", label: "Completed" },
];

export function Sidebar({ activeView, onViewChange, counts }) {
  return (
    <aside className="w-64 border-r bg-white p-6">
      <h2 className="text-lg font-bold mb-6">Task Master</h2>

      <nav className="space-y-2">
        {views.map(v => (
          <button
            key={v.key}
            onClick={() => onViewChange(v.key)}
            className={`w-full flex justify-between px-3 py-2 rounded ${
              activeView === v.key
                ? "bg-purple-100 text-purple-700"
                : "hover:bg-gray-100"
            }`}
          >
            <span>{v.label}</span>
            <span className="text-sm text-gray-500">
              {counts?.[v.key] ?? 0}
            </span>
          </button>
        ))}
      </nav>
    </aside>
  );
}
