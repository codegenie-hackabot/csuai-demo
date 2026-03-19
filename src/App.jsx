import React from 'react';
import SlotMachine from './SlotMachine';
import ChessGame from './ChessGame';
import Header from './Header';

function App() {
  return (
    <div>
      <Header />
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <h1>Welcome to the Skibidi website!</h1>
        <SlotMachine />
        <ChessGame />
        <p>This is a simplified version of the app.</p>
      </div>
    </div>
  );
}

export default App;
