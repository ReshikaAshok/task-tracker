// frontend/hooks/useOptimisticTasks.js

import { useState } from "react";

export default function useOptimisticTasks(initialTasks = []) {
  const [tasks, setTasks] = useState(initialTasks);

  const addTask = (task) => {
    setTasks(prev => [task, ...prev]);
  };

  const toggleTask = (id) => {
    setTasks(prev =>
      prev.map(t =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(prev => prev.filter(t => t.id !== id));
  };

  const replaceTasks = (serverTasks) => {
    setTasks(serverTasks);
  };

  return {
    tasks,
    setTasks: replaceTasks,
    addTask,
    toggleTask,
    deleteTask,
  };
}
