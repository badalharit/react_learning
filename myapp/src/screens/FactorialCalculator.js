import React, { useState, useMemo } from 'react';
import '../utils/FactorialCalculator.css'; // Import the CSS file

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
    <div className="factorial-calculator">
      <h2>useMemo Demonstration</h2>

      {/* Number Input Section */}
      <div className="input-section">
        <label>
          Enter a number:
          <input
            type="number"
            value={number}
            onChange={(e) => setNumber(Number(e.target.value))}
            min="1"
          />
        </label>
        <p>
          🧮 Factorial of {number} is: <strong>{factorial}</strong>
        </p>
      </div>

      {/* Dummy Counter Section */}
      <div className="counter-section">
        <p>This counter demonstrates unnecessary re-renders:</p>
        <button onClick={() => setCounter(c => c + 1)}>
          Increment Counter: {counter}
        </button>
        <p className="hint">
          💡 Notice how updating the counter doesn't trigger factorial recalculation
        </p>
      </div>
    </div>
  );
}

export default FactorialCalculator;