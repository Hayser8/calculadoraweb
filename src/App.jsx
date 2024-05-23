import React from 'react';
import { useState, useEffect, useCallback } from 'react';
import Display from './components/Display';
import ButtonPanel from './components/ButtonPanel';
import './App.css';

function App() {
  const [displayValue, setDisplayValue] = useState('0');
  const [operator, setOperator] = useState(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);
  const [value, setValue] = useState(null);

  const handleDigit = useCallback((digit) => {
    if (waitingForOperand) {
      setDisplayValue(String(digit));
      setWaitingForOperand(false);
    } else {
      const newValue = displayValue === '0' ? String(digit) : displayValue + digit;
      if (newValue.length <= 9) {
        setDisplayValue(newValue);
      }
    }
  }, [waitingForOperand, displayValue]);

  const handleOperator = useCallback((nextOperator) => {
    const inputValue = parseFloat(displayValue);
    if (value == null) {
      setValue(inputValue);
    } else if (operator) {
      const currentValue = value || 0;
      const newValue = performOperation(operator, currentValue, inputValue);
      setValue(newValue);
      setDisplayValue(String(newValue).slice(0, 9));
    }
    setWaitingForOperand(true);
    setOperator(nextOperator);
  }, [displayValue, operator, value]);

  const performOperation = useCallback((operator, left, right) => {
    switch (operator) {
      case '+':
        return left + right;
      case '-':
        return left - right;
      case '*':
        return left * right;
      case '/':
        return right !== 0 ? left / right : 'Error';
      case '%':
        return left / 100;
      default:
        return right;
    }
  }, []);

  const handleClear = useCallback(() => {
    setDisplayValue('0');
    setValue(null);
    setOperator(null);
    setWaitingForOperand(false);
  }, []);

  const handleToggleSign = useCallback(() => {
    const newValue = displayValue.charAt(0) === '-' ? displayValue.substr(1) : '-' + displayValue;
    if (newValue.length <= 9) {
      setDisplayValue(newValue);
    }
  }, [displayValue]);

  const handleDecimal = useCallback(() => {
    if (!displayValue.includes('.') && displayValue.length < 9) {
      setDisplayValue(displayValue + '.');
    }
  }, [displayValue]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key >= '0' && event.key <= '9') {
        handleDigit(event.key);
      } else if (event.key === '.') {
        handleDecimal();
      } else if (event.key === 'Enter' || event.key === '=') {
        handleOperator('=');
      } else if (event.key === 'Backspace') {
        handleClear();
      } else if (['+', '-', '*', '/'].includes(event.key)) {
        handleOperator(event.key);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleDigit, handleOperator, handleClear, handleDecimal, handleToggleSign]);

  return (
    <div className="calculator">
      <Display value={displayValue} />
      <ButtonPanel
        onDigit={handleDigit}
        onOperator={handleOperator}
        onClear={handleClear}
        onToggleSign={handleToggleSign}
        onDecimal={handleDecimal}
      />
    </div>
  );
}

export default App;
