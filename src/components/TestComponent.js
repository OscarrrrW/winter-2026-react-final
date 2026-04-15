import { useState } from 'react';

const TestComponent = () => {
  const [position, setPosition] = useState({ top: '40%', left: '40%' });

  const moveButton = () => {
    const newTop = `${Math.floor(Math.random() * 85)}%`;
    const newLeft = `${Math.floor(Math.random() * 85)}%`;
    setPosition({ top: newTop, left: newLeft });
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '400px' }}>
      <button
        onClick={moveButton}
        style={{ position: 'absolute', top: position.top, left: position.left }}
      >
        Click me
      </button>
    </div>
  );
};

export default TestComponent;