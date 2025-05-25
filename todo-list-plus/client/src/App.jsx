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
import PrivateRoute from "./components/Auth/PrivateRoute";
import SidebarMenu from "./components/SidebarMenu";
import Dashboard from "./components/Dashboard/Dashboard";

const App = () => {
  return (
    <Router>
      <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
        <SidebarMenu />
        <div className="flex-1 overflow-auto">
          <NotificationCenter />
          <Routes>
            {/* Auth */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />

            {/* Dashboard & Main Features */}
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route
              path="/today"
              element={
                <PrivateRoute>
                  <TaskList />
                </PrivateRoute>
              }
            />
            <Route
              path="/upcoming"
              element={
                <PrivateRoute>
                  <div className="p-4 text-gray-900 dark:text-white">Upcoming Tasks</div>
                </PrivateRoute>
              }
            />
            <Route
              path="/completed"
              element={
                <PrivateRoute>
                  <div className="p-4 text-gray-900 dark:text-white">Completed Tasks</div>
                </PrivateRoute>
              }
            />
            <Route
              path="/tags"
              element={
                <PrivateRoute>
                  <div className="p-4 text-gray-900 dark:text-white">Tags</div>
                </PrivateRoute>
              }
            />
            <Route
              path="/calendar"
              element={
                <PrivateRoute>
                  <CalendarView />
                </PrivateRoute>
              }
            />
            <Route
              path="/analytics"
              element={
                <PrivateRoute>
                  <Stats />
                </PrivateRoute>
              }
            />
            <Route
              path="/settings"
              element={
                <PrivateRoute>
                  <Settings />
                </PrivateRoute>
              }
            />

            {/* Task Details */}
            <Route
              path="/tasks/:id"
              element={
                <PrivateRoute>
                  <TaskDetails />
                </PrivateRoute>
              }
            />

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/login" replace />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
