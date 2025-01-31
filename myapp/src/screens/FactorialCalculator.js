import React, { useState, useMemo } from 'react';

/**
 * Component demonstrating useMemo for optimizing expensive calculations
 * 
 * Use Case:
 * - Calculates factorial of a number (expensive operation for large numbers)
 * - Shows a counter to demonstrate unnecessary re-renders
 * - Memoizes factorial calculation to prevent recomputation on unrelated state changes
 */
function FactorialCalculator() {
  // State for the input number whose factorial we want to calculate
  const [number, setNumber] = useState(1);
  
  // Dummy counter state to demonstrate unnecessary re-renders
  const [counter, setCounter] = useState(0);

  /**
   * Memoized factorial calculation using useMemo
   * 
   * Why useMemo?
   * - Factorial calculation is computationally expensive for large numbers
   * - Without memoization, it would recalculate on EVERY component render
   * - With memoization, only recalculates when 'number' changes
   * 
   * Dependency Array [number]:
   * - Specifies that we should recalculate only when 'number' changes
   * - Changes to 'counter' will NOT trigger recalculation
   */
  const factorial = useMemo(() => {
    console.log('⏳ Performing expensive calculation...'); // Visual indicator of computation
    let result = 1;
    for (let i = 1; i <= number; i++) {
      result *= i;
    }
    return result;
  }, [number]); // Dependency array - only track 'number'

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h2>useMemo Demonstration</h2>
      
      {/* Number Input Section */}
      <div style={{ marginBottom: '20px' }}>
        <label>
          Enter a number: 
          <input
            type="number"
            value={number}
            onChange={(e) => setNumber(Number(e.target.value))}
            min="1"
            style={{ marginLeft: '10px' }}
          />
        </label>
        <p>
          🧮 Factorial of {number} is: <strong>{factorial}</strong>
        </p>
      </div>

      {/* Dummy Counter Section */}
      <div style={{ 
        padding: '15px', 
        backgroundColor: '#f0f0f0',
        borderRadius: '8px'
      }}>
        <p>This counter demonstrates unnecessary re-renders:</p>
        <button 
          onClick={() => setCounter(c => c + 1)}
          style={{
            padding: '8px 16px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Increment Counter: {counter}
        </button>
        <p style={{ color: '#666', marginTop: '10px' }}>
          💡 Notice how updating the counter doesn't trigger factorial recalculation
        </p>
      </div>
    </div>
  );
}

export default FactorialCalculator;