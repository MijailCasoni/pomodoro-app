// src/components/Controls.jsx
import React from 'react';
import './Controls.css';

const Controls = ({ isActive, onStartPause, onReset }) => {
  return (
    <div className="controls">
      <button onClick={onStartPause} className="control-btn">
        {isActive ? 'Pausar' : 'Iniciar'}
      </button>
      <button onClick={onReset} className="control-btn reset">
        Restablecer
      </button>
    </div>
  );
};

export default Controls;
