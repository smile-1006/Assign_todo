import React from 'react';
import TodayTasks from './TodayTasks';
import CalendarView from './CalendarView';
import Stats from './Stats';

const Dashboard = () => {
  return (
    <div className="p-4 space-y-6">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <TodayTasks />
      <CalendarView />
      <Stats />
    </div>
  );
};

export default Dashboard;
