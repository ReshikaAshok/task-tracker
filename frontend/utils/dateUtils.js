// frontend/src/utils/dateUtils.js

export function isToday(date) {
  if (!date) return false;
  return date === "Today";
}

export function isOverdue(date) {
  if (!date) return false;
  return date === "Overdue";
}

export function formatDate(date) {
  if (!date) return "";
  return new Date(date).toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
  });
}

export function daysUntil(date) {
  if (!date) return null;
  const today = new Date();
  const target = new Date(date);
  const diff = target - today;
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}
