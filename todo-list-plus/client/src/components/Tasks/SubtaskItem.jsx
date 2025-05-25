import React, { useState } from 'react';

const SubtaskItem = ({ subtask, onToggle }) => {
  const [checked, setChecked] = useState(subtask.completed);

  const handleChange = () => {
    setChecked(!checked);
    onToggle(subtask.id, !checked);
  };

  return (
    <label className="flex items-center space-x-2 cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        className="form-checkbox h-5 w-5 text-indigo-600"
      />
      <span
        className={`transition-all duration-300 ${
          checked ? 'line-through text-gray-400' : 'text-gray-900 dark:text-white'
        }`}
      >
        {subtask.title}
      </span>
    </label>
  );
};

export default SubtaskItem;
