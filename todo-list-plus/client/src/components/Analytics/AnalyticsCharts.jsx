import React from 'react';
import { Line, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const AnalyticsCharts = () => {
  const lineData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Tasks Completed',
        data: [3, 2, 5, 4, 6, 7, 8],
        borderColor: 'rgba(99, 102, 241, 1)', // Indigo-500
        backgroundColor: 'rgba(99, 102, 241, 0.2)',
        fill: true,
        tension: 0.3,
      },
    ],
  };

  const pieData = {
    labels: ['High', 'Medium', 'Low'],
    datasets: [
      {
        label: 'Priority Distribution',
        data: [12, 19, 7],
        backgroundColor: [
          'rgba(239, 68, 68, 0.7)', // Red-500
          'rgba(234, 179, 8, 0.7)', // Yellow-500
          'rgba(34, 197, 94, 0.7)', // Green-500
        ],
        borderColor: ['rgba(239, 68, 68, 1)', 'rgba(234, 179, 8, 1)', 'rgba(34, 197, 94, 1)'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 bg-white dark:bg-gray-900 rounded shadow">
      <div>
        <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Weekly Task Completion</h3>
        <Line data={lineData} />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Priority Distribution</h3>
        <Pie data={pieData} />
      </div>
    </div>
  );
};

export default AnalyticsCharts;
