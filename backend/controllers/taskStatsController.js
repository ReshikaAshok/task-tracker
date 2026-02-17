const pool = require("../config/db");

/**
 * Dashboard stats
 */
exports.getTaskStats = async (req, res) => {
  try {
    const { rows } = await pool.query(
      `
      SELECT
        COUNT(*) AS total,
        COUNT(*) FILTER (WHERE status = 'completed') AS completed,
        COUNT(*) FILTER (WHERE status != 'completed') AS pending,
        COUNT(*) FILTER (WHERE priority = 'high' AND status != 'completed') AS high_priority,
        COUNT(*) FILTER (WHERE due_date < NOW() AND status != 'completed') AS overdue
      FROM tasks
      WHERE user_id = $1
      `,
      [req.user.id]
    );

    res.json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to load stats" });
  }
};

/**
 * Daily completion streak
 */
exports.getStreak = async (req, res) => {
  try {
    const { rows } = await pool.query(
      `
      SELECT DATE(completed_at) AS day
      FROM tasks
      WHERE user_id = $1 AND status = 'completed'
      GROUP BY day
      ORDER BY day DESC
      `,
      [req.user.id]
    );

    let streak = 0;
    let current = new Date().toDateString();

    for (const row of rows) {
      const day = new Date(row.day).toDateString();
      if (day === current) {
        streak++;
        current = new Date(
          new Date(current).setDate(new Date(current).getDate() - 1)
        ).toDateString();
      } else break;
    }

    res.json({ streak });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to calculate streak" });
  }
};
