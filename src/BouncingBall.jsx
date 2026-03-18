import React, { useEffect, useRef } from 'react';

const BouncingBall = () => {
  const ballRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const ball = ballRef.current;
    const container = containerRef.current;
    if (!ball || !container) return;
    let posX = 0;
    let posY = 0;
    let velX = 2;
    let velY = 3;
    const radius = 20;
    const animate = () => {
      const { width, height } = container.getBoundingClientRect();
      posX += velX;
      posY += velY;
      if (posX + radius > width || posX - radius < 0) velX = -velX;
      if (posY + radius > height || posY - radius < 0) velY = -velY;
      ball.style.transform = `translate(${posX}px, ${posY}px)`;
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

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
      ></div>
    </div>
  );
};

export default BouncingBall;
