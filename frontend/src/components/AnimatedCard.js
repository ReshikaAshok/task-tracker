// frontend/src/components/AnimatedCard.js

export function AnimatedCard({ children }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm transition hover:shadow-md">
      {children}
    </div>
  );
}
