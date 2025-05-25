import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const TaskProgressChart = ({ data }) => {
  // data: [{ date: '2024-05-19', completed: 3 }, ...]
  const labels = data.map((d) => d.date);
  const completedCounts = data.map((d) => d.completed);

  const chartData = {
    labels,
    datasets: [
      {
        label: "Completed Tasks",
        data: completedCounts,
        fill: false,
        borderColor: "#2563eb",
        backgroundColor: "#2563eb",
        tension: 0.3,
        pointRadius: 5,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
    },
    scales: {
      y: { beginAtZero: true, ticks: { stepSize: 1 } },
    },
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-2">Task Completion (Last 7 Days)</h2>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default TaskProgressChart;