import React, { useState } from 'react';
import TaskList from '../Tasks/TaskList';
import AddTaskModal from '../Tasks/AddTaskModal';
import { Bell, Search, Plus } from 'lucide-react';

const Dashboard = () => {
  const [isAddTaskModalOpen, setIsAddTaskModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Dummy data for demonstration
  const tasks = [
    {
      _id: '1',
      title: 'Complete project documentation',
      description: 'Write comprehensive documentation for the new feature',
      dueDate: '2024-03-25',
      priority: 'High',
      tags: ['Documentation', 'Important'],
      completed: false,
    },
    {
      _id: '2',
      title: 'Review pull requests',
      description: 'Review and merge pending pull requests',
      dueDate: '2024-03-24',
      priority: 'Medium',
      tags: ['Code Review'],
      completed: true,
    },
  ];

  return (
    <div className="flex-1 overflow-hidden">
      <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex-1 max-w-lg">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search tasks..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600
                    bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white
                    focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent"
                />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                <Bell className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 overflow-auto">
        <TaskList
          tasks={tasks}
          onAddTask={() => setIsAddTaskModalOpen(true)}
          onSelectTask={(task) => console.log('Selected task:', task)}
          onToggleTask={(taskId) => console.log('Toggle task:', taskId)}
        />
      </main>

      <AddTaskModal
        isOpen={isAddTaskModalOpen}
        onClose={() => setIsAddTaskModalOpen(false)}
        onAddTask={(task) => console.log('Add task:', task)}
      />
    </div>
  );
};

export default Dashboard;