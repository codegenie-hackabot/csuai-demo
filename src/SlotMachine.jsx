import React, { useState, useEffect } from 'react';
import './SlotMachine.css';

const symbols = ['🍒','🍋','🔔','⭐','7'];

function randomSymbol(){
  return symbols[Math.floor(Math.random()*symbols.length)];
}

export default function SlotMachine(){
  const [reels, setReels] = useState([randomSymbol(), randomSymbol(), randomSymbol()]);
  const [spinning, setSpinning] = useState(false);

  const spin = () => {
    if (spinning) return;
    setSpinning(true);
    const interval = setInterval(() => {
      setReels([randomSymbol(), randomSymbol(), randomSymbol()]);
    }, 100);
    setTimeout(() => {
      clearInterval(interval);
      setSpinning(false);
    }, 2000);
  };

  return (
    <div className="slot-machine">
      <div className="reels">{reels.map((s,i)=><span key={i} className="reel">{s}</span>)}</div>
      <button onClick={spin} disabled={spinning}>Spin</button>
    </div>
  );
}
