import React, { useState, useEffect } from 'react';

const EditTaskModal = ({ isOpen, onClose, task, onSave }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  useEffect(() => {
    if (task) {
      setTitle(task.title || '');
      setDescription(task.description || '');
      setDueDate(task.dueDate ? new Date(task.dueDate).toISOString().substr(0, 10) : '');
    } else {
      setTitle('');
      setDescription('');
      setDueDate('');
    }
  }, [task]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ title, description, dueDate });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded p-6 w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">{task ? 'Edit Task' : 'New Task'}</h2>
        <form onSubmit={handleSubmit}>
          <label className="block mb-2 font-semibold">Title</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded mb-4"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <label className="block mb-2 font-semibold">Description</label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded mb-4"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <label className="block mb-2 font-semibold">Due Date</label>
          <input
            type="date"
            className="w-full p-2 border border-gray-300 rounded mb-4"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className="px-4 py-2 rounded border border-gray-300"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditTaskModal;
