import React from 'react';

const priorityColors = {
  High: 'bg-red-500',
  Medium: 'bg-yellow-500',
  Low: 'bg-green-500',
};

const TaskCard = ({ title, dueDate, priority, tags, completed, onToggleComplete }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 hover:shadow-lg transition-shadow cursor-pointer flex items-center space-x-4">
      <input
        type="checkbox"
        checked={completed}
        onChange={onToggleComplete}
        className="form-checkbox h-5 w-5 text-indigo-600"
      />
      <div className="flex-1">
        <h3
          className={`text-lg font-semibold truncate ${
            completed ? 'line-through text-gray-400' : 'text-gray-900 dark:text-white'
          }`}
          title={title}
        >
          {title}
        </h3>
        <div className="flex items-center space-x-2 mt-1">
          {priority && (
            <span
              className={`inline-block w-3 h-3 rounded-full ${priorityColors[priority]} `}
              title={`Priority: ${priority}`}
            />
          )}
          {dueDate && (
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {new Date(dueDate).toLocaleDateString()}
            </span>
          )}
          {tags && tags.length > 0 && (
            <div className="flex space-x-1">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-indigo-100 text-indigo-800 text-xs rounded-full px-2 py-0.5"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
