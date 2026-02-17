// frontend/src/pages/Dashboard.js

import { useEffect, useState } from "react";
import { getTasks, addTask, toggleTask } from "../services/api";

export default function Dashboard({ setToken }) {
  const token = localStorage.getItem("token");
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  const loadTasks = async () => {
    const res = await getTasks(token);
    setTasks(res.data);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const handleAdd = async () => {
    if (!title.trim()) return;
    await addTask(token, title);
    setTitle("");
    loadTasks();
  };

  const handleToggle = async (task) => {
    const newStatus =
      task.status === "completed" ? "pending" : "completed";
    await toggleTask(token, task.id, newStatus);
    loadTasks();
  };

  const completed = tasks.filter(t => t.status === "completed").length;

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* SIDEBAR */}
      <aside className="w-64 bg-black text-white p-8 flex flex-col justify-between">
        <h1 className="text-2xl font-bold text-purple-400">
          TaskTracker
        </h1>

        <button
          onClick={() => {
            localStorage.clear();
            setToken(null);
          }}
          className="text-sm text-gray-400 hover:text-white"
        >
          Logout
        </button>
      </aside>

      {/* MAIN */}
      <main className="flex-1 p-10">
        <h2 className="text-3xl font-bold mb-8">Dashboard</h2>

        {/* STATS */}
        <div className="grid grid-cols-3 gap-6 mb-10">
          <Stat label="Total" value={tasks.length} />
          <Stat label="Completed" value={completed} />
          <Stat label="Pending" value={tasks.length - completed} />
        </div>

        {/* ADD TASK */}
        <div className="flex gap-4 mb-8">
          <input
            className="flex-1 p-4 rounded-xl border"
            placeholder="What needs to be done?"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleAdd()}
          />
          <button
            onClick={handleAdd}
            className="bg-purple-600 text-white px-8 rounded-xl hover:bg-purple-700"
          >
            Add
          </button>
        </div>

        {/* TASK LIST */}
        <div className="bg-white rounded-xl shadow divide-y">
          {tasks.map(task => (
            <div
              key={task.id}
              className="flex items-center gap-4 p-5 hover:bg-gray-50"
            >
              <input
                type="checkbox"
                checked={task.status === "completed"}
                onChange={() => handleToggle(task)}
                className="w-5 h-5 accent-purple-600"
              />

              <span
                className={`flex-1 ${
                  task.status === "completed"
                    ? "line-through text-gray-400"
                    : ""
                }`}
              >
                {task.title}
              </span>
            </div>
          ))}

          {tasks.length === 0 && (
            <p className="p-6 text-gray-400">No tasks yet.</p>
          )}
        </div>
      </main>
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <p className="text-gray-500 text-sm">{label}</p>
      <p className="text-3xl font-bold mt-2">{value}</p>
    </div>
  );
}
