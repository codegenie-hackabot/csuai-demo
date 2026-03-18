import React, { useState } from 'react';
import './App.css';

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
    </div>
  );
}

export default App;
