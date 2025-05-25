const Task = require('../models/Task');
const User = require('../models/User');

exports.addCollaborator = async (req, res, next) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ message: 'Email is required' });
    }
    const task = await Task.findOne({
      _id: req.params.id,
      owner: req.user._id,
    });
    if (!task) {
      return res.status(404).json({ message: 'Task not found or not authorized' });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    if (task.collaborators.includes(user._id)) {
      return res.status(400).json({ message: 'User is already a collaborator' });
    }
    task.collaborators.push(user._id);
    await task.save();
    res.json({ message: 'Collaborator added', task });
  } catch (err) {
    next(err);
  }
};

exports.removeCollaborator = async (req, res, next) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ message: 'Email is required' });
    }
    const task = await Task.findOne({
      _id: req.params.id,
      owner: req.user._id,
    });
    if (!task) {
      return res.status(404).json({ message: 'Task not found or not authorized' });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    const index = task.collaborators.indexOf(user._id);
    if (index === -1) {
      return res.status(400).json({ message: 'User is not a collaborator' });
    }
    task.collaborators.splice(index, 1);
    await task.save();
    res.json({ message: 'Collaborator removed', task });
  } catch (err) {
    next(err);
  }
};
