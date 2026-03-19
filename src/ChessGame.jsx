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
  const [selected, setSelected] = useState(null); // {row, col}

  const handleCellClick = (rowIdx, colIdx) => {
    const piece = board[rowIdx][colIdx];
    if (selected) {
      // move selected piece to new cell
      const newBoard = board.map(r => r.slice());
      newBoard[selected.row][selected.col] = '';
      newBoard[rowIdx][colIdx] = board[selected.row][selected.col];
      setBoard(newBoard);
      setSelected(null);
    } else if (piece) {
      setSelected({ row: rowIdx, col: colIdx });
    }
  };

  return (
    <div className="chess-game">
      <h2>Chess Game</h2>
      <div className="board">
        {board.map((row, i) => (
          <div key={i} className="row">
            {row.map((cell, j) => (
              <div
                key={j}
                className={`cell ${(i + j) % 2 === 0 ? 'light' : 'dark'} ${selected && selected.row===i && selected.col===j ? 'selected' : ''}`}
                onClick={() => handleCellClick(i, j)}
              > {cell} </div>
            ))}
          </div>
        ))}
      </div>
      <p>Click a piece then a destination to move.</p>
    </div>
  );
}
