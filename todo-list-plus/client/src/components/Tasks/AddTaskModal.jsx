import React, { useState } from 'react';

const AddTaskModal = ({ isOpen, onClose, onAddTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('Low');
  const [tags, setTags] = useState([]);
  const [recurrence, setRecurrence] = useState('None');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      alert('Title is required');
      return;
    }
    onAddTask({ title, description, dueDate, priority, tags, recurrence });
    onClose();
    setTitle('');
    setDescription('');
    setDueDate('');
    setPriority('Low');
    setTags([]);
    setRecurrence('None');
  };

  const handleTagChange = (e) => {
    setTags(e.target.value.split(',').map((tag) => tag.trim()));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white dark:bg-gray-900 rounded-lg p-6 w-full max-w-md shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Add New Task</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Title</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2 dark:bg-gray-800 dark:text-white"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Description</label>
            <textarea
              className="w-full border border-gray-300 rounded px-3 py-2 dark:bg-gray-800 dark:text-white"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Due Date</label>
            <input
              type="datetime-local"
              className="w-full border border-gray-300 rounded px-3 py-2 dark:bg-gray-800 dark:text-white"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Priority</label>
            <div className="flex space-x-4">
              {['Low', 'Medium', 'High'].map((level) => (
                <label key={level} className="flex items-center space-x-1">
                  <input
                    type="radio"
                    name="priority"
                    value={level}
                    checked={priority === level}
                    onChange={() => setPriority(level)}
                  />
                  <span>{level}</span>
                </label>
              ))}
            </div>
          </div>
          <div>
            <label className="block mb-1 font-medium">Tags (comma separated)</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2 dark:bg-gray-800 dark:text-white"
              value={tags.join(', ')}
              onChange={handleTagChange}
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Recurrence</label>
            <select
              className="w-full border border-gray-300 rounded px-3 py-2 dark:bg-gray-800 dark:text-white"
              value={recurrence}
              onChange={(e) => setRecurrence(e.target.value)}
            >
              <option value="None">None</option>
              <option value="Daily">Daily</option>
              <option value="Weekly">Weekly</option>
              <option value="Monthly">Monthly</option>
            </select>
          </div>
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded bg-indigo-600 text-white hover:bg-indigo-700"
            >
              Add Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTaskModal;
