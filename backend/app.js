const express = require("express");
const cors = require("cors");
require("dotenv").config();

const { apiLimiter, authLimiter } = require("./middleware/rateLimiter");

const authRoutes = require("./routes/auth");
const taskRoutes = require("./routes/tasks");
const taskMetaRoutes = require("./routes/taskMeta");
const taskStatsRoutes = require("./routes/taskStats");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", apiLimiter);
app.use("/api/auth", authLimiter);

app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/task-meta", taskMetaRoutes);
app.use("/api/task-stats", taskStatsRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
