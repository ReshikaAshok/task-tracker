const pool = require("../config/db");

/**
 * Update task meta (priority, due_date, tags)
 */
exports.updateTaskMeta = async (req, res) => {
  const { taskId } = req.params;
  const { priority, due_date, tags } = req.body;

  try {
    const result = await pool.query(
      `
      UPDATE tasks
      SET
        priority = COALESCE($1, priority),
        due_date = COALESCE($2, due_date),
        tags = COALESCE($3, tags)
      WHERE id = $4 AND user_id = $5
      RETURNING id, priority, due_date, tags
      `,
      [priority, due_date, tags, taskId, req.user.id]
    );

    if (!result.rows.length) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to update task meta" });
  }
};

/**
 * Get task meta only
 */
exports.getTaskMeta = async (req, res) => {
  const { taskId } = req.params;

  try {
    const result = await pool.query(
      `
      SELECT priority, due_date, tags
      FROM tasks
      WHERE id = $1 AND user_id = $2
      `,
      [taskId, req.user.id]
    );

    if (!result.rows.length) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch task meta" });
  }
};
