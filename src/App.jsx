import React, { useState, useEffect } from 'react';
import './App.css';
import SlotMachine from './SlotMachine';
import CameraFeed from './CameraFeed';
import VoiceRecorder from './VoiceRecorder';
import Stopwatch from './Stopwatch';

function App() {
  // Fibonacci counter state: keep previous two numbers
  const [fibPrev, setFibPrev] = useState(0);
  const [fibCurr, setFibCurr] = useState(1);
  const [rolling, setRolling] = useState(false);

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
      const timer = setTimeout(() => setRolling(false), 2000); // duration matches CSS animation
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
      <button onClick={handleBarrelRoll} style={{ marginBottom: '1rem', marginLeft: '0.5rem' }}>
        Barrel Roll
      </button>
      <SlotMachine />
      <CameraFeed />
      <VoiceRecorder />
      <Stopwatch />
    </div>
  );
}

export default App;
