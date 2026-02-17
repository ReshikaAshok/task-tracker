// frontend/src/components/UpcomingDeadlines.js

export function UpcomingDeadlines({ deadlines }) {
  return (
    <div>
      <h3 className="font-semibold mb-4">Upcoming Deadlines</h3>
      <ul className="space-y-3">
        {deadlines.map(d => (
          <li key={d.id} className="text-sm">
            <p className="font-medium">{d.title}</p>
            <p className="text-gray-500">{d.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
