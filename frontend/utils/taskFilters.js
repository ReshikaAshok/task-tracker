// frontend/src/utils/taskFilters.js

export function filterToday(tasks) {
  return tasks.filter(
    t => !t.completed && t.dueDate === "Today"
  );
}

export function filterWeek(tasks) {
  return tasks.filter(t => !t.completed);
}

export function filterOverdue(tasks) {
  return tasks.filter(
    t => !t.completed && t.dueDate === "Overdue"
  );
}

export function filterHighPriority(tasks) {
  return tasks.filter(
    t => !t.completed && t.priority === "high"
  );
}

export function filterCompleted(tasks) {
  return tasks.filter(t => t.completed);
}
