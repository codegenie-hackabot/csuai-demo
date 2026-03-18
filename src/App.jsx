import React, { useState, useEffect } from 'react';
import './App.css';
import SlotMachine from './SlotMachine';
import CameraFeed from './CameraFeed';
import VoiceRecorder from './VoiceRecorder';
import Stopwatch from './Stopwatch';
import BouncingBall from './BouncingBall';

function App() {
  // Fibonacci counter state: keep previous two numbers
  const [fibPrev, setFibPrev] = useState(0);
  const [fibCurr, setFibCurr] = useState(1);
  const [rolling, setRolling] = useState(false);
  const [ballSpeed, setBallSpeed] = useState(1);

  const incrementFib = () => {
    const next = fibPrev + fibCurr;
    setFibPrev(fibCurr);
    setFibCurr(next);
  };

  const handleBarrelRoll = () => {
    setRolling(true);
  };

  useEffect(() => {
    if (rolling) {
      const timer = setTimeout(() => setRolling(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [rolling]);

  return (
    <div className={`app-container ${rolling ? 'barrel-roll' : ''}`} style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h1>CSUAI Demo</h1>
      <p>Subtext that says.</p>
      <p>Oranges are oddly spherical, yet they never roll away when you stare at them.</p>
      <p>Fibonacci Counter: {fibPrev}</p>
      <button onClick={incrementFib} style={{ marginBottom: '1rem' }}>Next Fibonacci</button>
      <button onClick={handleBarrelRoll} style={{ marginBottom: '1rem', marginLeft: '0.5rem' }}>Barrel Roll</button>
      <div style={{ margin: '1rem 0' }}>
        <label>
          Ball Speed: {ballSpeed.toFixed(1)}x
          <input
            type="range"
            min="0.1"
            max="3"
            step="0.1"
            value={ballSpeed}
            onChange={e => setBallSpeed(parseFloat(e.target.value))}
            style={{ marginLeft: '0.5rem' }}
          />
        </label>
      </div>
      <SlotMachine />
      <CameraFeed />
      <VoiceRecorder />
      <Stopwatch />
      <BouncingBall speed={ballSpeed} />
    </div>
  );
}

export default App;
