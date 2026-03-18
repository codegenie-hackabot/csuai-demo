import React, { useState } from 'react';
import './PollMock.css';

const PollMock = () => {
  const question = "Which feature do you like the most?";
  const options = ["Bouncing Ball", "Dino Game", "Voice Recorder", "Slot Machine"];
  const [votes, setVotes] = useState(Array(options.length).fill(0));
  const [selected, setSelected] = useState(null);

  const handleVote = (index) => {
    const newVotes = [...votes];
    newVotes[index] += 1;
    setVotes(newVotes);
    setSelected(index);
  };

  return (
    <div className="poll-mock">
      <h2>{question}</h2>
      <ul>
        {options.map((opt, i) => (
          <li key={i}>
            <button
              className={`option-btn ${selected === i ? 'selected' : ''}`}
              onClick={() => handleVote(i)}
            >
              {opt}
            </button>
            <span className="vote-count">Votes: {votes[i]}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PollMock;
