// frontend/src/utils/priorityUtils.js

export const PRIORITY_ORDER = {
  high: 1,
  medium: 2,
  low: 3,
};

export function sortByPriority(tasks) {
  return [...tasks].sort(
    (a, b) =>
      PRIORITY_ORDER[a.priority] - PRIORITY_ORDER[b.priority]
  );
}

export function getPriorityLabel(priority) {
  return priority?.toUpperCase() || "";
}

export function isHighPriority(task) {
  return task.priority === "high";
}
