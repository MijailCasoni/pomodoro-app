// src/components/Settings.jsx
import { useState } from 'react';
import './Settings.css';

const Settings = ({ workTime, shortBreakTime, longBreakTime, onSettingsUpdate }) => {
  const [workMinutes, setWorkMinutes] = useState(workTime / 60);
  const [shortBreakMinutes, setShortBreakMinutes] = useState(shortBreakTime / 60);
  const [longBreakMinutes, setLongBreakMinutes] = useState(longBreakTime / 60);
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSettingsUpdate(workMinutes * 60, shortBreakMinutes * 60, longBreakMinutes * 60);
    setIsOpen(false);
  };

  return (
    <div className="settings">
      <button onClick={() => setIsOpen(!isOpen)} className="settings-btn">
        Configuraciones
      </button>
      {isOpen && (
        <form onSubmit={handleSubmit} className="settings-form">
          <div className="form-group">
            <label>Tiempo de Trabajo (min):</label>
            <input
              type="number"
              value={workMinutes}
              onChange={(e) => setWorkMinutes(e.target.value)}
              min="1"
            />
          </div>
          <div className="form-group">
            <label>Descanso Corto (min):</label>
            <input
              type="number"
              value={shortBreakMinutes}
              onChange={(e) => setShortBreakMinutes(e.target.value)}
              min="1"
            />
          </div>
          <div className="form-group">
            <label>Descanso Largo (min):</label>
            <input
              type="number"
              value={longBreakMinutes}
              onChange={(e) => setLongBreakMinutes(e.target.value)}
              min="1"
            />
          </div>
          <button type="submit" className="save-btn">
            Guardar
          </button>
        </form>
      )}
    </div>
  );
};

export default Settings;
