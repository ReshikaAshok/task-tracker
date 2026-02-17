// frontend/src/components/FocusMode.js

export function FocusMode() {
  return (
    <div className="bg-white p-6 rounded-xl border">
      <h3 className="font-semibold mb-2">Focus Mode</h3>
      <p className="text-sm text-gray-500 mb-4">
        Work on one task without distractions.
      </p>
      <button className="bg-black text-white px-4 py-2 rounded">
        Start Focus
      </button>
    </div>
  );
}
