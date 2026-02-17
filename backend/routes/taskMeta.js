const express = require("express");
const router = express.Router();

const auth = require("../middleware/authMiddleware");
const {
  updateTaskMeta,
  getTaskMeta,
} = require("../controllers/taskMetaController");

router.get("/:taskId", auth, getTaskMeta);
router.put("/:taskId", auth, updateTaskMeta);

module.exports = router;
