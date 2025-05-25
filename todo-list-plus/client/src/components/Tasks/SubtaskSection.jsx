import React, { useState } from 'react';

const SubtaskSection = ({ subtasks = [], onAdd, onToggle, onDelete }) => {
  const [newSubtask, setNewSubtask] = useState('');

  const handleAdd = () => {
    if (newSubtask.trim()) {
      onAdd(newSubtask.trim());
      setNewSubtask('');
    }
  };

  return (
    <div className="mt-4">
      <h3 className="text-lg font-semibold mb-2">Subtasks</h3>
      <ul>
        {subtasks.map((subtask, index) => (
          <li key={index} className="flex items-center space-x-2 mb-1">
            <input
              type="checkbox"
              checked={subtask.completed}
              onChange={() => onToggle(index)}
            />
            <span className={subtask.completed ? 'line-through text-gray-500' : ''}>
              {subtask.title}
            </span>
            <button
              onClick={() => onDelete(index)}
              className="ml-auto text-red-500 hover:text-red-700"
            >
              &times;
            </button>
          </li>
        ))}
      </ul>
      <div className="flex space-x-2 mt-2">
        <input
          type="text"
          className="flex-grow p-2 border border-gray-300 rounded"
          placeholder="New subtask"
          value={newSubtask}
          onChange={(e) => setNewSubtask(e.target.value)}
        />
        <button
          onClick={handleAdd}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default SubtaskSection;
