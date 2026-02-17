// backend/controllers/taskController.js
const pool = require("../config/db");

const getAllTasks = async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM tasks ORDER BY id DESC"
    );
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch tasks" });
  }
};

const addTask = async (req, res) => {
  try {
    const { title, description, priority, due_date } = req.body;

    const result = await pool.query(
      `INSERT INTO tasks (title, description, priority, due_date)
       VALUES ($1,$2,$3,$4)
       RETURNING *`,
      [title, description || "", priority || "medium", due_date || null]
    );

    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to add task" });
  }
};

const updateTask = async (req, res) => {
  try {
    const { status, priority } = req.body;
    const { id } = req.params;

    const result = await pool.query(
      `UPDATE tasks
       SET status = COALESCE($1, status),
           priority = COALESCE($2, priority)
       WHERE id = $3
       RETURNING *`,
      [status, priority, id]
    );

    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to update task" });
  }
};

const deleteTask = async (req, res) => {
  try {
    await pool.query("DELETE FROM tasks WHERE id=$1", [req.params.id]);
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to delete task" });
  }
};

module.exports = { getAllTasks, addTask, updateTask, deleteTask };
