import React, { useEffect, useRef } from 'react';

const BouncingBall = ({ speed = 1 }) => {
  const ballRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const ball = ballRef.current;
    const container = containerRef.current;
    if (!ball || !container) return;

    const radius = 20; // half of ball size (40px)
    let posX = radius;
    let posY = radius;
    // base velocities
    let baseVelX = 2;
    let baseVelY = 3;
    // current velocities scaled by speed
    let velX = baseVelX * speed;
    let velY = baseVelY * speed;

    const animate = () => {
      const { width, height } = container.getBoundingClientRect();
      posX += velX;
      posY += velY;
      if (posX + radius > width || posX - radius < 0) velX = -velX;
      if (posY + radius > height || posY - radius < 0) velY = -velY;
      ball.style.transform = `translate(${posX - radius}px, ${posY - radius}px)`;
      requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
    // update velocities when speed changes
    const speedObserver = new MutationObserver(() => {
      velX = baseVelX * speed;
      velY = baseVelY * speed;
    });
    // not needed, speed changes cause component re-render and new effect runs
    return () => {
      // cleanup
    };
  }, [speed]);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100%',
        height: '300px',
        border: '1px solid #ccc',
        overflow: 'hidden',
        marginTop: '2rem',
      }}
    >
      <div
        ref={ballRef}
        style={{
          position: 'absolute',
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          background: 'tomato',
        }}
      />
    </div>
  );
};

export default BouncingBall;
