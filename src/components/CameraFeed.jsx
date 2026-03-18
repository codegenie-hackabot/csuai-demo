import React, { useEffect, useState } from 'react';
import '../App.css';

function CameraFeed() {
  const [status, setStatus] = useState('idle');
  const [running, setRunning] = useState(false);

  useEffect(() => {
    // Simulate starting video feed
    setStatus('started');
    setRunning(true);
    return () => {
      setStatus('stopped');
      setRunning(false);
    };
  }, []);

  const handleClick = () => {
    setStatus('running');
  };

  return (
    <div>
      <video autoPlay={true} default="user"></video>
      <br />
      <button onClick={handleClick}>Start</button>
      <div>Status: {status}</div>
    </div>
  );
}

export default CameraFeed;
