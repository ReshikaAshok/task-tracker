// frontend/src/components/OverdueAlert.js

export function OverdueAlert({ count }) {
  if (!count) return null;

  return (
    <div className="bg-red-100 text-red-700 px-6 py-3 rounded-lg mb-4">
      ⚠️ You have {count} overdue tasks
    </div>
  );
}
