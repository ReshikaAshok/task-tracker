// frontend/src/components/ProgressSummary.js

export function ProgressSummary({ total, completed, pending }) {
  return (
    <div>
      <h3 className="font-semibold mb-4">Progress</h3>
      <div className="flex justify-between text-sm">
        <span>Total: {total}</span>
        <span>Completed: {completed}</span>
        <span>Pending: {pending}</span>
      </div>
    </div>
  );
}
