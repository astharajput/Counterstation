import React, { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  const [color, setColor] = useState("#FFFFFF"); // Initial color white

  const addValue = () => {
    setCounter(counter + 1);
  };

  const removeValue = () => {
    setCounter(counter - 1);
  };

  const changeColor = () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16); // Generate random color
    setColor(randomColor);
  };

  return (
    <>
      <h1>Counter Playstation</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add Counter</button>
      <button onClick={removeValue}>Remove Counter</button>
      <button onClick={changeColor}>Change Color</button>
      <div style={{ backgroundColor: color, width: '100px', height: '100px' }}></div> {/* Display color */}
    </>
  );
}

export default App;
