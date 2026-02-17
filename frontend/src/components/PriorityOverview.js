// frontend/src/components/PriorityOverview.js

export function PriorityOverview({ high, medium, low }) {
  return (
    <div>
      <h3 className="font-semibold mb-4">Priority Overview</h3>
      <ul className="space-y-2 text-sm">
        <li className="flex justify-between">
          <span>High</span><span>{high}</span>
        </li>
        <li className="flex justify-between">
          <span>Medium</span><span>{medium}</span>
        </li>
        <li className="flex justify-between">
          <span>Low</span><span>{low}</span>
        </li>
      </ul>
    </div>
  );
}
