// src/components/Timer.jsx
import React from 'react';
import './Timer.css';

const Timer = ({ timeLeft, mode }) => {
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60)
      .toString()
      .padStart(2, '0');
    const seconds = (time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  const modeDisplay = {
    work: 'Trabajo',
    shortBreak: 'Descanso Corto',
    longBreak: 'Descanso Largo',
  };

  return (
    <div className="timer">
      <h2>{modeDisplay[mode]}</h2>
      <div className="time-display">{formatTime(timeLeft)}</div>
    </div>
  );
};

export default Timer;
