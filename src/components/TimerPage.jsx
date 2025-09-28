import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function TimerPage({ title }) {
  const [timeLeft, setTimeLeft] = useState(300);
  const [isRunning, setIsRunning] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isRunning || timeLeft === 0) return;

    const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const formatTime = (seconds) => {
    const min = Math.floor(seconds / 60).toString().padStart(2, '0');
    const sec = (seconds % 60).toString().padStart(2, '0');
    return `${min}:${sec}`;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 p-8">
      <h2 className="text-4xl font-bold text-blue-600 mb-6">{title}</h2>
      <div className="text-6xl font-mono mb-6">{formatTime(timeLeft)}</div>

      <div className="flex gap-4">
        <button
          onClick={() => setIsRunning(!isRunning)}
          className="py-3 px-6 rounded-2xl bg-gradient-to-r from-blue-400 to-blue-600 text-white font-semibold shadow-lg hover:brightness-105"
        >
          {isRunning ? 'Pause' : 'Start'}
        </button>

        <button
          onClick={() => {
            setTimeLeft(300);  // reset to 5 minutes
            setIsRunning(false); // stop timer
          }}
          className="py-3 px-6 rounded-2xl bg-gradient-to-r from-teal-400 to-teal-600 text-white font-semibold shadow-lg hover:brightness-105"
        >
          Reset
        </button>

        <button
          onClick={() => navigate('/dashboard')}
          className="py-3 px-6 rounded-2xl bg-gray-400 text-white font-semibold shadow-lg hover:brightness-105"
        >
          Back
        </button>
      </div>
    </div>
  );
}
