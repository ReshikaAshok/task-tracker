const express = require("express");
const router = express.Router();

const auth = require("../middleware/authMiddleware");
const {
  getTaskStats,
  getStreak,
} = require("../controllers/taskStatsController");

router.get("/", auth, getTaskStats);
router.get("/streak", auth, getStreak);

module.exports = router;
