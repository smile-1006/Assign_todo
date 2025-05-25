import React, { useState, useEffect, useRef } from 'react';

const PomodoroTimer = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [isWorkSession, setIsWorkSession] = useState(true);
  const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 minutes
  const [alertSound, setAlertSound] = useState(true);
  const timerRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev === 0) {
            if (alertSound) {
              new Audio('/alert.mp3').play();
            }
            setIsWorkSession((prevSession) => !prevSession);
            return isWorkSession ? 5 * 60 : 25 * 60;
          }
          return prev - 1;
        });
      }, 1000);
    } else if (!isRunning && timerRef.current) {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [isRunning, isWorkSession, alertSound]);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60)
      .toString()
      .padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  const toggleAlertSound = () => {
    setAlertSound((prev) => !prev);
  };

  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6 max-w-sm mx-auto text-center">
      <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
        {isWorkSession ? 'Work Session' : 'Break'}
      </h2>
      <div className="text-6xl font-mono mb-6 text-gray-900 dark:text-white">{formatTime(timeLeft)}</div>
      <div className="flex justify-center space-x-4 mb-4">
        <button
          onClick={() => setIsRunning(true)}
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
        >
          Start
        </button>
        <button
          onClick={() => setIsRunning(false)}
          className="bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-white px-4 py-2 rounded-md hover:bg-gray-400 dark:hover:bg-gray-600"
        >
          Pause
        </button>
        <button
          onClick={() => {
            setIsRunning(false);
            setTimeLeft(isWorkSession ? 25 * 60 : 5 * 60);
          }}
          className="bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-white px-4 py-2 rounded-md hover:bg-gray-400 dark:hover:bg-gray-600"
        >
          Reset
        </button>
      </div>
      <div>
        <label className="inline-flex items-center space-x-2 cursor-pointer">
          <input
            type="checkbox"
            checked={alertSound}
            onChange={toggleAlertSound}
            className="form-checkbox h-5 w-5 text-indigo-600"
          />
          <span className="text-gray-900 dark:text-white">Alert Sound</span>
        </label>
      </div>
      <div className="h-2 bg-gray-300 dark:bg-gray-700 rounded mt-6 overflow-hidden">
        <div
          className="h-full bg-red-500 transition-all duration-1000"
          style={{ width: `${((isWorkSession ? 25 * 60 : 5 * 60) - timeLeft) / (isWorkSession ? 25 * 60 : 5 * 60) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default PomodoroTimer;
