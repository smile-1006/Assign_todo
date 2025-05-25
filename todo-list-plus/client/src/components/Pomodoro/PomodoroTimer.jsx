import React, { useState, useEffect, useRef } from 'react';

const PomodoroTimer = () => {
  const [secondsLeft, setSecondsLeft] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);
  const [isBreak, setIsBreak] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (isActive && secondsLeft > 0) {
      timerRef.current = setTimeout(() => {
        setSecondsLeft(secondsLeft - 1);
      }, 1000);
    } else if (secondsLeft === 0) {
      // Play sound alert
      const audio = new Audio('/sounds/alert.mp3');
      audio.play();
      if (isBreak) {
        setIsBreak(false);
        setSecondsLeft(25 * 60);
      } else {
        setIsBreak(true);
        setSecondsLeft(5 * 60);
      }
    }
    return () => clearTimeout(timerRef.current);
  }, [isActive, secondsLeft, isBreak]);

  const toggle = () => {
    setIsActive(!isActive);
  };

  const reset = () => {
    setIsActive(false);
    setSecondsLeft(isBreak ? 5 * 60 : 25 * 60);
  };

  const formatTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const seconds = secs % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="p-4 bg-white rounded shadow text-center">
      <h2 className="text-xl font-semibold mb-4">{isBreak ? 'Break' : 'Work'} Timer</h2>
      <div className="text-5xl font-mono mb-4">{formatTime(secondsLeft)}</div>
      <button
        onClick={toggle}
        className="px-4 py-2 bg-blue-600 text-white rounded mr-2 hover:bg-blue-700"
      >
        {isActive ? 'Pause' : 'Start'}
      </button>
      <button
        onClick={reset}
        className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
      >
        Reset
      </button>
    </div>
  );
};

export default PomodoroTimer;
