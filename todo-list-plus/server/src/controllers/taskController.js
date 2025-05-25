const Task = require('../models/Task');

exports.getAllTasks = async (req, res, next) => {
  try {
    const tasks = await Task.find({
      $or: [
        { owner: req.user._id },
        { collaborators: req.user._id }
      ]
    });
    res.json(tasks);
  } catch (err) {
    next(err);
  }
};

exports.getTaskById = async (req, res, next) => {
  try {
    const task = await Task.findOne({
      _id: req.params.id,
      $or: [
        { owner: req.user._id },
        { collaborators: req.user._id }
      ]
    });
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.json(task);
  } catch (err) {
    next(err);
  }
};

exports.createTask = async (req, res, next) => {
  try {
    const { title, description, dueDate } = req.body;
    if (!title) {
      return res.status(400).json({ message: 'Title is required' });
    }
    const task = new Task({
      title,
      description,
      dueDate,
      owner: req.user._id,
    });
    await task.save();
    res.status(201).json(task);
  } catch (err) {
    next(err);
  }
};

exports.updateTask = async (req, res, next) => {
  try {
    const task = await Task.findOne({
      _id: req.params.id,
      owner: req.user._id,
    });
    if (!task) {
      return res.status(404).json({ message: 'Task not found or not authorized' });
    }
    const { title, description, dueDate, completed, reminder } = req.body;
    if (title !== undefined) task.title = title;
    if (description !== undefined) task.description = description;
    if (dueDate !== undefined) task.dueDate = dueDate;
    if (completed !== undefined) task.completed = completed;
    if (reminder !== undefined) task.reminder = reminder;
    await task.save();
    res.json(task);
  } catch (err) {
    next(err);
  }
};

exports.deleteTask = async (req, res, next) => {
  try {
    const task = await Task.findOneAndDelete({
      _id: req.params.id,
      owner: req.user._id,
    });
    if (!task) {
      return res.status(404).json({ message: 'Task not found or not authorized' });
    }
    res.json({ message: 'Task deleted' });
  } catch (err) {
    next(err);
  }
};

exports.toggleCompletion = async (req, res, next) => {
  try {
    const task = await Task.findOne({
      _id: req.params.id,
      $or: [
        { owner: req.user._id },
        { collaborators: req.user._id }
      ]
    });
    if (!task) {
      return res.status(404).json({ message: 'Task not found or not authorized' });
    }
    task.completed = !task.completed;
    await task.save();
    res.json(task);
  } catch (err) {
    next(err);
  }
};

exports.setReminder = async (req, res, next) => {
  try {
    const { reminder } = req.body;
    if (!reminder) {
      return res.status(400).json({ message: 'Reminder date is required' });
    }
    const task = await Task.findOne({
      _id: req.params.id,
      $or: [
        { owner: req.user._id },
        { collaborators: req.user._id }
      ]
    });
    if (!task) {
      return res.status(404).json({ message: 'Task not found or not authorized' });
    }
    task.reminder = reminder;
    await task.save();
    res.json(task);
  } catch (err) {
    next(err);
  }
};
