// backend/models/taskModel.js

const pool = require("../config/db");

exports.createTask = async (userId, title) => {
  const res = await pool.query(
    `INSERT INTO tasks (user_id, title, status)
     VALUES ($1, $2, 'pending')
     RETURNING *`,
    [userId, title]
  );
  return res.rows[0];
};

exports.getTasks = async (userId) => {
  const res = await pool.query(
    `SELECT * FROM tasks
     WHERE user_id = $1
     ORDER BY created_at DESC`,
    [userId]
  );
  return res.rows;
};

const updateTask = async (id, user_id, fields) => {
  const { title, description, status, priority, due_date } = fields;

  const result = await pool.query(
    `UPDATE tasks
     SET title = COALESCE($1, title),
         description = COALESCE($2, description),
         status = COALESCE($3, status),
         priority = COALESCE($4, priority),
         due_date = COALESCE($5, due_date)
     WHERE id = $6 AND user_id = $7
     RETURNING *`,
    [title, description, status, priority, due_date, id, user_id]
  );

  return result.rows[0];
};

exports.deleteTask = async (id, userId) => {
  await pool.query(
    `DELETE FROM tasks WHERE id = $1 AND user_id = $2`,
    [id, userId]
  );
};
