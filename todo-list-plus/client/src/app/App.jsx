import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../components/Auth/Login";
import Signup from "../components/Auth/Signup";
import ForgotPassword from "../components/Auth/ForgotPassword";
import TaskList from "../components/Dashboard/TaskList";
import CalendarView from "../components/Dashboard/CalendarView";
import Stats from "../components/Dashboard/Stats";
import TaskDetails from "../components/TaskManager/TaskDetails";
import TaskModal from "../components/TaskManager/TaskModal";
import PomodoroTimer from "../components/PomodoroTimer";
import Settings from "../components/Settings/Settings";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/tasks" element={<TaskList />} />
        <Route path="/calendar" element={<CalendarView />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/tasks/:id" element={<TaskDetails />} />
        <Route path="/task-modal" element={<TaskModal />} />
        <Route path="/pomodoro" element={<PomodoroTimer />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;