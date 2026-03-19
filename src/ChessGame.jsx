import React, { useState } from 'react';
import './ChessGame.css';

const initialBoard = [
  ['♜','♞','♝','♛','♚','♝','♞','♜'],
  ['♟','♟','♟','♟','♟','♟','♟','♟'],
  ['','','','','','','',''],
  ['','','','','','','',''],
  ['','','','','','','',''],
  ['','','','','','','',''],
  ['♙','♙','♙','♙','♙','♙','♙','♙'],
  ['♖','♘','♗','♕','♔','♗','♘','♖']
];

export default function ChessGame() {
  const [board, setBoard] = useState(initialBoard);
  // No move logic yet – placeholder for future implementation
  return (
    <div className="chess-game">
      <h2>Chess Game</h2>
      <div className="board">
        {board.map((row, i) => (
          <div key={i} className="row">
            {row.map((cell, j) => (
              <div key={j} className={`cell ${(i + j) % 2 === 0 ? 'light' : 'dark'}`}> {cell} </div>
            ))}
          </div>
        ))}
      </div>
      <p>Future moves will be added later.</p>
    </div>
  );
}
