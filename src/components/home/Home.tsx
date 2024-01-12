// home.tsx

import { random } from 'gsap';
import './home.scss';
import { useEffect, useState } from 'react';

interface Position {
  x: number;
  y: number;
}

const getRandomPosition = (maxWidth: number, maxHeight: number): Position => {
  const x = Math.random() * maxWidth;
  const y = Math.random() * maxHeight;
  return { x, y };
};

const Home: React.FC = () => {
  const numberOfDivs = 20;
  const [positions, setPositions] = useState<Position[]>([]);
  useEffect(() => {
   const moveDivs = () => {
     setPositions(
       new Array(numberOfDivs).fill(null).map(() => getRandomPosition(window.innerWidth - 180, window.innerHeight - 100))
     );
   };

    const interval = setInterval(moveDivs,200); // Adjust time as needed
     return () => clearInterval(interval);
 }, []);

 

  return (
    <div className="homecontainerdiv">
      <div className="cardbg">
        {positions.map((pos, index) => (
          <div key={index} className="movingDiv" style={{ left: `${pos.x}px`, top: `${pos.y}px` }}>
            {/* Content of div */}
          </div>
        ))}
      </div>

      <div className="myname">
        <div style={{ width: '100%', margin: 'auto', height: '50px' }}>
          <h1 id="h1_1">AMARJANE&nbsp;ELMAHDI</h1>
          <h1 id="h1_2">AMARJANE&nbsp;ELMAHDI</h1>
        </div>
      </div>
      <h4 id="developpertext">&lt; WEB DEVELOPER /&gt;</h4>
    </div>
  );
};

export default Home;
