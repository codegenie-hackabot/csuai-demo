import React, { useState, useEffect } from 'react';
import './App.css';
import SlotMachine from './SlotMachine';
import CameraFeed from './CameraFeed';
import VoiceRecorder from './VoiceRecorder';
import Stopwatch from './Stopwatch';
import BouncingBall from './BouncingBall';

function App() {
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
      <section style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#f0f8ff' }}>
        <h2>Investor Pitch</h2>
        <p>We are building an interactive AI‑powered sandbox that showcases cutting‑edge web technologies. Our platform combines real‑time video, voice recording, mini‑games, and dynamic visualizations to create a compelling demo for investors looking to fund next‑generation user experiences.</p>
        <p>Key metrics: rapid prototyping, modular React components, and a Vite build that scales.</p>
        <p>Join us to accelerate innovation and capture market share in immersive web applications.</p>
        <h3>Financial Projections</h3>
        <table style={{ margin: '0 auto', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid #999', padding: '4px' }}>Year</th>
              <th style={{ border: '1px solid #999', padding: '4px' }}>Revenue ($M)</th>
              <th style={{ border: '1px solid #999', padding: '4px' }}>EBITDA ($M)</th>
              <th style={{ border: '1px solid #999', padding: '4px' }}>Cash Burn ($M)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={{ border: '1px solid #999', padding: '4px' }}>2024</td><td style={{ border: '1px solid #999', padding: '4px' }}>0.5</td><td style={{ border: '1px solid #999', padding: '4px' }}>-0.2</td><td style={{ border: '1px solid #999', padding: '4px' }}>0.8</td></tr>
            <tr><td style={{ border: '1px solid #999', padding: '4px' }}>2025</td><td style={{ border: '1px solid #999', padding: '4px' }}>2.0</td><td style={{ border: '1px solid #999', padding: '4px' }}>0.3</td><td style={{ border: '1px solid #999', padding: '4px' }}>0.5</td></tr>
            <tr><td style={{ border: '1px solid #999', padding: '4px' }}>2026</td><td style={{ border: '1px solid #999', padding: '4px' }}>5.5</td><td style={{ border: '1px solid #999', padding: '4px' }}>1.8</td><td style={{ border: '1px solid #999', padding: '4px' }}>0.2</td></tr>
            <tr><td style={{ border: '1px solid #999', padding: '4px' }}>2027</td><td style={{ border: '1px solid #999', padding: '4px' }}>12.0</td><td style={{ border: '1px solid #999', padding: '4px' }}>4.5</td><td style={{ border: '1px solid #999', padding: '4px' }}>-0.3</td></tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default App;
