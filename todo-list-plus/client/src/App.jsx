import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import ForgotPassword from "./components/Auth/ForgotPassword";
import TaskList from "./components/Dashboard/TodayTasks";
import CalendarView from "./components/Dashboard/CalendarView";
import Stats from "./components/Dashboard/Stats";
import TaskDetails from "./components/Tasks/TaskDetails";
import TaskModal from "./components/Tasks/TaskList";
import PomodoroTimer from "./components/Pomodoro/PomodoroTimer";
import Settings from "./components/Settings/Settings";
import NotificationCenter from "./components/Notifications/NotificationCenter";

// Optional: Dashboard wrapper to show main dashboard components
const Dashboard = () => (
  <div className="space-y-6">
    <NotificationCenter />
    <TaskList />
    <Stats />
    <PomodoroTimer />
  </div>
);

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Dashboard & Main Features */}
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/tasks" element={<TaskList />} />
        <Route path="/tasks/:id" element={<TaskDetails />} />
        <Route path="/task-modal" element={<TaskModal />} />
        <Route path="/calendar" element={<CalendarView />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/pomodoro" element={<PomodoroTimer />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/notifications" element={<NotificationCenter />} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
};

export default App;