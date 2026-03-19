import React, { useState } from 'react';
import './ChessGame.css';

const initialBoard = [
  [null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null]
];

export default function ChessGame(){
  const [board,setBoard]=useState(initialBoard);
  const [currentPlayer,setCurrentPlayer]=useState('White');
  function handleCellClick(row,col){
    if(board[row][col]!==null) return;
    const newBoard=board.map(r=>r.slice());
    newBoard[row][col]=currentPlayer==='White'?'W':'B';
    setBoard(newBoard);
    setCurrentPlayer(p=>p==='White'?'Black':'White');
  }
  return(
    <div className="chess-game">
      <h2>Chess Game</h2>
      <p>Current turn: <strong>{currentPlayer}</strong></p>
      <div className="board">
        {board.map((row,rIdx)=>(
          <div key={rIdx} className="row">
            {row.map((cell,cIdx)=>(
              <div key={cIdx} className="cell" onClick={()=>handleCellClick(rIdx,cIdx)}>{cell}</div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
