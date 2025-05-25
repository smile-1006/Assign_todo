import React from 'react';

const TaskList = ({ tasks, onSelect }) => {
  return (
    <section className="bg-white rounded shadow p-4 max-w-3xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">Task List</h2>
      {tasks.length === 0 ? (
        <p className="text-gray-500">No tasks available.</p>
      ) : (
        <ul className="divide-y divide-gray-200">
          {tasks.map((task) => (
            <li
              key={task._id}
              className="p-3 hover:bg-gray-100 cursor-pointer flex justify-between items-center"
              onClick={() => onSelect(task)}
            >
              <div>
                <h3 className={`text-lg font-medium ${task.completed ? 'line-through text-gray-400' : ''}`}>
                  {task.title}
                </h3>
                <p className="text-sm text-gray-500">{task.description}</p>
              </div>
              <div className="text-sm text-gray-600">
                {task.dueDate ? new Date(task.dueDate).toLocaleDateString() : 'No due date'}
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default TaskList;
