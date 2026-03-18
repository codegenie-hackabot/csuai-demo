import React, { useState } from 'react';
import './App.css';
import GTA6 from './components/GTA6';
import SlotMachine from './components/SlotMachine';
import CameraFeed from './components/CameraFeed';

function Sponsors() {
  const sponsors = [
    { name: 'Google', url: 'https://www.google.com', logo: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png' },
    { name: 'JetBrains', url: 'https://www.jetbrains.com', logo: 'https://resources.jetbrains.com/storage/products/company/brand/logos/jetbrains.png' },
    { name: 'OpenAI', url: 'https://openai.com', logo: 'https://openai.com/content/images/2022/05/openai-avatar.png' },
    { name: 'Anthropic', url: 'https://www.anthropic.com', logo: 'https://www.anthropic.com/images/anthropic-logo.svg' },
    { name: 'IBM', url: 'https://www.ibm.com', logo: 'https://www.ibm.com/brand/logo/logo.png' },
    { name: 'and more', url: '#', logo: '' },
  ];
  return (
    <div className="sponsors" style={{ marginTop: '2rem' }}>
      <h2>Sponsors</h2>
      <ul style={{ listStyle: 'none', padding: 0, display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        {sponsors.map((s) => (
          <li key={s.name} style={{ background: 'var(--accent-bg)', padding: '0.5rem 1rem', borderRadius: '4px', display: 'flex', alignItems: 'center' }}>
            {s.logo && <img src={s.logo} alt={s.name} style={{ width: '24px', height: '24px', marginRight: '0.5rem' }} />}
            <a href={s.url} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-h)', textDecoration: 'none' }}>{s.name}</a>
          </li>
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
      <CameraFeed />
      <Sponsors />
    </div>
  );
}

export default App;
