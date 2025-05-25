import React from 'react';
import { Calendar, Tag, CheckCircle } from 'lucide-react';

const priorityConfig = {
  High: { color: 'bg-red-500', text: 'text-red-500' },
  Medium: { color: 'bg-yellow-500', text: 'text-yellow-500' },
  Low: { color: 'bg-green-500', text: 'text-green-500' },
};

const TaskCard = ({ title, description, dueDate, priority, tags, completed, onToggleComplete, onClick }) => {
  const priorityStyle = priorityConfig[priority] || priorityConfig.Low;

  return (
    <div 
      onClick={onClick}
      className={`
        bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md
        transition-all duration-200 ease-in-out p-4 cursor-pointer
        border border-gray-200 dark:border-gray-700
        ${completed ? 'opacity-75' : ''}
      `}
    >
      <div className="flex items-start space-x-3">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleComplete();
          }}
          className={`
            mt-1 w-5 h-5 rounded-full border-2 flex items-center justify-center
            ${completed 
              ? 'border-indigo-500 bg-indigo-500' 
              : 'border-gray-300 dark:border-gray-600'}
          `}
        >
          {completed && <CheckCircle className="w-4 h-4 text-white" />}
        </button>

        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 
              className={`font-medium text-gray-900 dark:text-white ${
                completed ? 'line-through text-gray-500 dark:text-gray-400' : ''
              }`}
            >
              {title}
            </h3>
            <span className={`w-2 h-2 rounded-full ${priorityStyle.color}`} />
          </div>

          {description && (
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
              {description}
            </p>
          )}

          <div className="mt-3 flex flex-wrap items-center gap-2">
            {dueDate && (
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <Calendar className="w-4 h-4 mr-1" />
                {new Date(dueDate).toLocaleDateString()}
              </div>
            )}

            {tags && tags.length > 0 && (
              <div className="flex flex-wrap gap-1">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-2 py-0.5 rounded-full text-xs
                      bg-indigo-50 text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-400"
                  >
                    <Tag className="w-3 h-3 mr-1" />
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;