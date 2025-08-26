// routes/tasks.js
const router = require('express').Router();
const Task = require('../models/Task');

// GET all tasks
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.findAll();
    res.json(tasks);
  } catch (err) {
    res.status(400).json('Error: ' + err);
  }
});

// POST a new task
router.post('/', async (req, res) => {
  try {
    const newTask = await Task.create(req.body);
    res.json('Tarea agregada!');
  } catch (err) {
    res.status(400).json('Error: ' + err);
  }
});

// GET a single task
router.get('/:id', async (req, res) => {
  try {
    const task = await Task.findByPk(req.params.id);
    if (!task) return res.status(404).json('Tarea no encontrada');
    res.json(task);
  } catch (err) {
    res.status(400).json('Error: ' + err);
  }
});

// PUT (update) a task
router.put('/:id', async (req, res) => {
  try {
    const [rowsAffected, [updatedTask]] = await Task.update(req.body, {
      where: { id: req.params.id },
      returning: true,
    });
    if (rowsAffected === 0) return res.status(404).json('Tarea no encontrada');
    res.json('Tarea actualizada!');
  } catch (err) {
    res.status(400).json('Error: ' + err);
  }
});

// DELETE a task
router.delete('/:id', async (req, res) => {
  try {
    const rowsAffected = await Task.destroy({
      where: { id: req.params.id },
    });
    if (rowsAffected === 0) return res.status(404).json('Tarea no encontrada');
    res.json('Tarea eliminada!');
  } catch (err) {
    res.status(400).json('Error: ' + err);
  }
});

module.exports = router;