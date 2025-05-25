import React from 'react';
import TaskCard from './TaskCard';
import { Plus } from 'lucide-react';

const TaskList = ({ tasks = [], onAddTask, onSelectTask, onToggleTask }) => {
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Tasks</h2>
        <button
          onClick={onAddTask}
          className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg
            hover:bg-indigo-700 transition-colors duration-200"
        >
          <Plus className="w-5 h-5 mr-2" />
          Add Task
        </button>
      </div>

      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {tasks.length === 0 ? (
          <div className="col-span-full text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">No tasks yet. Create your first task!</p>
          </div>
        ) : (
          tasks.map((task) => (
            <TaskCard
              key={task._id}
              {...task}
              onToggleComplete={() => onToggleTask(task._id)}
              onClick={() => onSelectTask(task)}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default TaskList;