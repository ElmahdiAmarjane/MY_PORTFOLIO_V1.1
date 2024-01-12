import React, { useEffect, useState } from 'react';
import './YourComponent.scss'; // Import your Sass file

const getRandomPosition = (maxWidth : number , maxHeight:number) => {
  const x = Math.random() * maxWidth;
  const y = Math.random() * maxHeight;
  return { x, y };
};

const YourComponent = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveDiv = () => {
      const maxWidth = window.innerWidth - 100; // Adjust for div size
      const maxHeight = window.innerHeight - 100; // Adjust for div size
      setPosition(getRandomPosition(maxWidth, maxHeight));
    };

    const interval = setInterval(moveDiv, 2000); // Adjust time as needed
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="movingDiv"
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    >
      {/* Content of div */}
    </div>
  );
};

export default YourComponent;
