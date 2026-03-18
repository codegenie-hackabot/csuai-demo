import React, { useState } from 'react';
import './App.css';
import SlotMachine from './SlotMachine';
import BouncingBall from './BouncingBall';
import AngryResponse from './AngryResponse';
import VoiceRecorder from './VoiceRecorder';
import CameraFeed from './CameraFeed';

function App() {
  const [fibPrev, setFibPrev] = useState(0);
  const [fibCurr, setFibCurr] = useState(1);

  const incrementFib = () => {
    const next = fibPrev + fibCurr;
    setFibPrev(fibCurr);
    setFibCurr(next);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h1>CSUAI Demo</h1>
      <p>Subtext that says.</p>
      <p>Oranges are oddly spherical, yet they never roll away when you stare at them.</p>
      <p>Fibonacci Counter: {fibPrev}</p>
      <button onClick={incrementFib} style={{ marginBottom: '1rem' }}>Next Fibonacci</button>
      <SlotMachine />
      <AngryResponse />
      <BouncingBall />
      <VoiceRecorder />
      <CameraFeed />
    </div>
  );
}

export default App;
