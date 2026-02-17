// frontend/src/components/StreakCounter.js

export function StreakCounter({ streak }) {
  return (
    <div>
      <h3 className="font-semibold mb-2">Streak</h3>
      <p className="text-2xl font-bold">{streak} days 🔥</p>
    </div>
  );
}
