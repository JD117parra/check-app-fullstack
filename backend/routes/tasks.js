// backend/routes/tasks.js
const express = require('express');
const Task    = require('../models/Task');
const auth    = require('../middleware/auth');

const router = express.Router();
router.use(auth);


router.get('/', async (req, res) => {
  try {
    const tasks = await Task
      .find({ userId: req.userId })
      .sort({ createdAt: -1 });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


router.post('/', async (req, res) => {
  try {
    const { title, description } = req.body;  
    const task = await Task.create({
      userId: req.userId,
      title,
      description,  
      completed: false
    });
    res.status(201).json(task);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


router.put('/:id', async (req, res) => {
  try {
    const { title, description, completed } = req.body;
    
    const updates = {};
    if (title   !== undefined) updates.title     = title;
    if (description !== undefined) updates.description = description;
    if (completed !== undefined) updates.completed = completed;

   
    const task = await Task.findOneAndUpdate(
      { _id: req.params.id, userId: req.userId },
      updates,
      { new: true }  
    );

    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }
    
    res.json(task);
  } catch (err) {
    console.error('Error en PUT /api/tasks/:id', err);
    res.status(400).json({ error: err.message });
  }
});


router.delete('/:id', async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({
      _id: req.params.id,
      userId: req.userId
    });
    if (!task) return res.status(404).json({ error: 'Task not found' });
    res.json({ message: 'Task deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;