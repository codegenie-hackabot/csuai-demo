import React, { useState, useEffect, useRef } from 'react';
import './Stopwatch.css';

const Stopwatch = () => {
  const [running, setRunning] = useState(false);
  const [time, setTime] = useState(0); // milliseconds
  const intervalRef = useRef(null);

  useEffect(() => {
    if (running) {
      const start = Date.now() - time;
      intervalRef.current = setInterval(() => {
        setTime(Date.now() - start);
      }, 10);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [running]);

  const format = (ms) => {
    const totalSec = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSec / 60)
      .toString()
      .padStart(2, '0');
    const seconds = (totalSec % 60).toString().padStart(2, '0');
    const centiseconds = Math.floor((ms % 1000) / 10)
      .toString()
      .padStart(2, '0');
    return `${minutes}:${seconds}.${centiseconds}`;
  };

  return (
    <div className="stopwatch">
      <h3>Stopwatch</h3>
      <div className="display">{format(time)}</div>
      <div className="controls">
        <button onClick={() => setRunning(!running)}>
          {running ? 'Pause' : 'Start'}
        </button>
        <button
          onClick={() => {
            setRunning(false);
            setTime(0);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;
