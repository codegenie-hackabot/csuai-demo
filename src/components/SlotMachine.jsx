import React, { useState } from 'react';

const symbols = ['🍒','🔔','🍋','⭐','7'];

const SlotMachine = () => {
  const [reels, setReels] = useState(['❓','❓','❓']);
  const [result, setResult] = useState(null);

  const spin = () => {
    const newReels = [
      symbols[Math.floor(Math.random()*symbols.length)],
      symbols[Math.floor(Math.random()*symbols.length)],
      symbols[Math.floor(Math.random()*symbols.length)],
    ];
    setReels(newReels);
    setResult(newReels[0]===newReels[1] && newReels[1]===newReels[2] ? 'Jackpot!' : 'Try again');
  };

  return (
    <div style={{marginTop:'2rem'}}>
      <h2>Slot Machine</h2>
      <div style={{fontSize:'2rem',display:'flex',justifyContent:'center',gap:'1rem'}}>
        {reels.map((s,i)=><span key={i}>{s}</span>)}
      </div>
      <button onClick={spin} style={{marginTop:'1rem'}}>Spin</button>
      {result && <p>{result}</p>}
    </div>
  );
};

export default SlotMachine;
