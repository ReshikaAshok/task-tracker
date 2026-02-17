// frontend/hooks/useFilteredTasks.js

import { useMemo } from "react";

export default function useFilteredTasks(tasks, activeView) {
  return useMemo(() => {
    switch (activeView) {
      case "today":
        return tasks.filter(
          t => !t.completed && t.dueDate === "Today"
        );

      case "week":
        return tasks.filter(t => !t.completed);

      case "overdue":
        return tasks.filter(
          t => !t.completed && t.dueDate === "Overdue"
        );

      case "priority":
        return tasks.filter(
          t => !t.completed && t.priority === "high"
        );

      case "completed":
        return tasks.filter(t => t.completed);

      default:
        return tasks;
    }
  }, [tasks, activeView]);
}
