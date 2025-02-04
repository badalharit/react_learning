import React, { useState, useCallback } from 'react';

/**
 * Child component (optimized with React.memo)
 * Only re-renders when its props change
 */
const MyButton = React.memo(({ onClickFunctionCall, ButtonLabel }) => {
  console.log('Button rendered:',onClickFunctionCall, ButtonLabel);
  return <button onClick={onClickFunctionCall}>{ButtonLabel}</button>;
});

/**
 * Parent component demonstrating useCallback
 * 
 * Use Case:
 * - Prevent child component re-renders when parent state changes
 */
export default function CallbackDemo() {
  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  // Without useCallback, this function would recreate on every render
  const increment = useCallback(() => {
    setCount(c => c + 1);
  }, []); // No dependencies = stable function

  return (
    <div style={{ background: darkMode ? '#333' : '#fff', padding: '20px' }}>
      <h2>useCallback Demo</h2>
      <MyButton onClickFunctionCall={increment} ButtonLabel="Increment" />
      <p>Count: {count}</p>
      
      <button onClick={() => setDarkMode(!darkMode)}>
        Toggle Theme
      </button>
    </div>
  );
}