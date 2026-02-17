// frontend/src/components/TaskForm.js

export default function TaskForm({ value, onChange, onAdd }) {
  return (
    <div className="flex gap-4 mb-6">
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Add a new task..."
        className="flex-1 border p-3 rounded"
      />
      <button
        onClick={onAdd}
        className="bg-purple-600 text-white px-5 rounded"
      >
        Add
      </button>
    </div>
  );
}
