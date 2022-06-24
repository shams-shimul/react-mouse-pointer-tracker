import React, { useState } from 'react';

const initialPosition = { x: -100, y: -100 };

export const Tracker = () => {
  const [position, setPosition] = useState(initialPosition);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    setPosition({ x: clientX, y: clientY });
  };

  // console.log('Tracker rendered');

  return (
    <>
      <svg height="100vh" width="100%" onMouseMove={handleMouseMove}>
        <circle cx={position.x} cy={position.y} r="20" />
      </svg>
    </>
  );
};
