// frontend/src/components/NotificationPreview.js

export function NotificationsPreview({ notifications }) {
  return (
    <div>
      <h3 className="font-semibold mb-4">Reminders</h3>
      <ul className="space-y-2 text-sm">
        {notifications.map(n => (
          <li key={n.id} className="flex justify-between">
            <span>{n.title}</span>
            <span className="text-gray-500">{n.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
