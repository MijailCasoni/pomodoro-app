import { useState, useEffect, useRef } from 'react'
import Timer from './components/Timer';
import Controls from './components/Controls';
import Settings from './components/Settings';
import ThemeSwitcher from './components/ThemeSwitcher';



function Pomodoro(props) {

    const [workTime, setWorkTime] = useState(25 * 60); // 25 minutos en segundos
    const [shortBreakTime, setShortBreakTime] = useState(5 * 60); // 5 minutos en segundos
    const [longBreakTime, setLongBreakTime] = useState(15 * 60); // 15 minutos en segundos
    const [currentMode, setCurrentMode] = useState('work'); // 'work', 'shortBreak', 'longBreak'
    const [timeLeft, setTimeLeft] = useState(workTime);
    const [isActive, setIsActive] = useState(false);
    const [cycles, setCycles] = useState(0); // Contador de ciclos completados

    const timerRef = useRef(null);
  useEffect(() => {
    setTimeLeft(
      currentMode === 'work'
        ? workTime
        : currentMode === 'shortBreak'
        ? shortBreakTime
        : longBreakTime
    );
  }, [workTime, shortBreakTime, longBreakTime, currentMode]);

  useEffect(() => {
    if (isActive && timeLeft > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft((time) => time - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      handleTimerEnd();
    }

    return () => clearInterval(timerRef.current);
  }, [isActive, timeLeft]);

  const handleThemeChange = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  const handleTimerEnd = () => {
    playSound();
    if (currentMode === 'work') {
      if ((cycles + 1) % 4 === 0) {
        setCurrentMode('longBreak');
      } else {
        setCurrentMode('shortBreak');
      }
      setCycles(cycles + 1);
    } else {
      setCurrentMode('work');
    }
  };

  const playSound = () => {
    const audio = new Audio('/notification.mp3');
    audio.play();
  };

  const handleStartPause = () => {
    setIsActive(!isActive);
  };

  const handleReset = () => {
    setIsActive(false);
    setTimeLeft(
      currentMode === 'work'
        ? workTime
        : currentMode === 'shortBreak'
        ? shortBreakTime
        : longBreakTime
    );
  };

  const handleSettingsUpdate = (newWorkTime, newShortBreakTime, newLongBreakTime) => {
    setWorkTime(newWorkTime);
    setShortBreakTime(newShortBreakTime);
    setLongBreakTime(newLongBreakTime);
  };


    return (
        <div className={`app ${currentMode}`}>
        
            <h1>Pomodoro</h1>
        
            <Timer timeLeft={timeLeft} mode={currentMode} />
        
            <Controls
            isActive={isActive}
            onStartPause={handleStartPause}
            onReset={handleReset}
            />
            <Settings
            workTime={workTime}
            shortBreakTime={shortBreakTime}
            longBreakTime={longBreakTime}
            onSettingsUpdate={handleSettingsUpdate}
            />
        </div>
    );
}

export default Pomodoro;