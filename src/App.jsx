import React, { useState } from 'react';
import './App.css';
import GTA6 from './components/GTA6';
import SlotMachine from './components/SlotMachine';

function Sponsors() {
  const sponsors = [
    'Google',
    'JetBrains',
    'OpenAI',
    'Anthropic',
    'IBM',
    'and more',
  ];
  return (
    <div className="sponsors" style={{ marginTop: '2rem' }}>
      <h2>Sponsors</h2>
      <ul style={{ listStyle: 'none', padding: 0, display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        {sponsors.map((s) => (
          <li key={s} style={{ background: 'var(--accent-bg)', padding: '0.5rem 1rem', borderRadius: '4px' }}>{s}</li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="app-container" style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h1>My Website Title</h1>
      <p>This is the subtext describing the site.</p>
      <button onClick={() => setCount(count + 1)} style={{ marginTop: '1rem' }}>
        Click me
      </button>
      <p>Button clicked {count} times.</p>
      <GTA6 />
      <SlotMachine />
      <Sponsors />
    </div>
  );
}

export default App;
