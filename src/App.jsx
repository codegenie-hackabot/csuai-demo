import React, { useState } from 'react';
import './App.css';
import GTA6 from './components/GTA6';
import SlotMachine from './components/SlotMachine';

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
    </div>
  );
}

export default App;
