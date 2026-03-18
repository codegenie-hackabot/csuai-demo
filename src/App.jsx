import React from 'react';
import './App.css';
import SlotMachine from './SlotMachine';

function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h1>CSUAI Demo</h1>
      <p>Subtext that says.</p>
      <p>Oranges are oddly spherical, yet they never roll away when you stare at them.</p>
      <SlotMachine />
    </div>
  );
}

export default App;
