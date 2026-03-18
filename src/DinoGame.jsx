import React, { useEffect, useRef, useState } from 'react';

const DinoGame = () => {
  const canvasRef = useRef(null);
  const [running, setRunning] = useState(true);
  const [score, setScore] = useState(0);

  // Game constants
  const GRAVITY = 0.6;
  const JUMP_STRENGTH = -12;
  const DINO_WIDTH = 40;
  const DINO_HEIGHT = 40;
  const SPIKE_WIDTH = 20;
  const SPIKE_HEIGHT = 30;
  const SPEED = 4;

  // Game objects
  const dino = { x: 50, y: 0, vy: 0, width: DINO_WIDTH, height: DINO_HEIGHT, onGround: false };
  const spikes = [];

  // Helper to reset game
  const resetGame = () => {
    dino.x = 50;
    dino.y = canvasRef.current.height - DINO_HEIGHT;
    dino.vy = 0;
    dino.onGround = true;
    spikes.length = 0;
    setScore(0);
    setRunning(true);
  };

  // Spawn spikes periodically
  const spawnSpike = () => {
    const y = canvasRef.current.height - SPIKE_HEIGHT;
    spikes.push({ x: canvasRef.current.width, y, width: SPIKE_WIDTH, height: SPIKE_HEIGHT });
  };

  // Main loop
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = 800;
    canvas.height = 200;
    // Initial position
    dino.y = canvas.height - DINO_HEIGHT;
    dino.onGround = true;
    let spikeTimer = 0;

    const handleKeyDown = (e) => {
      if (!running) return;
      if (e.code === 'Space' || e.code === 'ArrowUp') {
        if (dino.onGround) {
          dino.vy = JUMP_STRENGTH;
          dino.onGround = false;
        }
      }
      if (e.code === 'ArrowDown') {
        // Ducking could be added; for simplicity we ignore.
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    const loop = () => {
      if (!running) {
        // Draw Game Over screen
        ctx.fillStyle = '#000';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#fff';
        ctx.font = '24px sans-serif';
        ctx.fillText(`Game Over! Score: ${score}`, 250, 100);
        ctx.fillText('Press R to Restart', 260, 140);
        return;
      }
      // Clear
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // Update dino
      dino.vy += GRAVITY;
      dino.y += dino.vy;
      if (dino.y + dino.height >= canvas.height) {
        dino.y = canvas.height - dino.height;
        dino.vy = 0;
        dino.onGround = true;
      }
      // Draw dino
      ctx.fillStyle = '#555';
      ctx.fillRect(dino.x, dino.y, dino.width, dino.height);

      // Spawn spikes
      spikeTimer += 1;
      if (spikeTimer > 90) {
        spawnSpike();
        spikeTimer = 0;
      }
      // Update spikes
      for (let i = spikes.length - 1; i >= 0; i--) {
        const s = spikes[i];
        s.x -= SPEED;
        ctx.fillStyle = '#a00';
        ctx.beginPath();
        ctx.moveTo(s.x, s.y + s.height);
        ctx.lineTo(s.x + s.width / 2, s.y);
        ctx.lineTo(s.x + s.width, s.y + s.height);
        ctx.closePath();
        ctx.fill();
        // Collision
        if (
          dino.x < s.x + s.width &&
          dino.x + dino.width > s.x &&
          dino.y < s.y + s.height &&
          dino.y + dino.height > s.y
        ) {
          setRunning(false);
        }
        // Remove off‑screen spikes
        if (s.x + s.width < 0) {
          spikes.splice(i, 1);
          setScore((prev) => prev + 1);
        }
      }

      // Draw score
      ctx.fillStyle = '#000';
      ctx.font = '16px sans-serif';
      ctx.fillText(`Score: ${score}`, 10, 20);

      requestAnimationFrame(loop);
    };
    // Restart handler
    const handleRestart = (e) => {
      if (!running && e.key.toLowerCase() === 'r') {
        resetGame();
        requestAnimationFrame(loop);
      }
    };
    window.addEventListener('keydown', handleRestart);
    requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keydown', handleRestart);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [running]);

  return (
    <div style={{ marginTop: '2rem' }}>
      <h2>Dinosaur Game</h2>
      <canvas ref={canvasRef} style={{ border: '1px solid #000' }} />
    </div>
  );
};

export default DinoGame;
