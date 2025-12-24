import express from "express";
import Task from "../models/Task.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Get tasks
router.get("/", authMiddleware, async (req, res) => {
  const tasks = await Task.find({ user: req.user });
  res.json(tasks);
});

// Add task
router.post("/", authMiddleware, async (req, res) => {
  const task = new Task({
    text: req.body.text,
    user: req.user,
  });
  await task.save();
  res.json(task);
});

export default router;
