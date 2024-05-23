import React from 'react';
import Button from './Button';

const ButtonPanel = ({ onDigit, onOperator, onClear, onToggleSign, onDecimal }) => (
  <div className="button-panel">
    <div className="row">
      <Button className="button gray" onClick={onClear} aria-label="clear">AC</Button>
      <Button className="button gray" onClick={onToggleSign} aria-label="toggle sign">±</Button>
      <Button className="button gray" onClick={() => onOperator('%')} aria-label="percent">%</Button>
      <Button className="button orange" onClick={() => onOperator('/')} aria-label="divide">÷</Button>
    </div>
    <div className="row">
      <Button className="button dark" onClick={() => onDigit(7)} aria-label="seven">7</Button>
      <Button className="button dark" onClick={() => onDigit(8)} aria-label="eight">8</Button>
      <Button className="button dark" onClick={() => onDigit(9)} aria-label="nine">9</Button>
      <Button className="button orange" onClick={() => onOperator('*')} aria-label="multiply">×</Button>
    </div>
    <div className="row">
      <Button className="button dark" onClick={() => onDigit(4)} aria-label="four">4</Button>
      <Button className="button dark" onClick={() => onDigit(5)} aria-label="five">5</Button>
      <Button className="button dark" onClick={() => onDigit(6)} aria-label="six">6</Button>
      <Button className="button orange" onClick={() => onOperator('-')} aria-label="subtract">−</Button>
    </div>
    <div className="row">
      <Button className="button dark" onClick={() => onDigit(1)} aria-label="one">1</Button>
      <Button className="button dark" onClick={() => onDigit(2)} aria-label="two">2</Button>
      <Button className="button dark" onClick={() => onDigit(3)} aria-label="three">3</Button>
      <Button className="button orange" onClick={() => onOperator('+')} aria-label="add">+</Button>
    </div>
    <div className="row">
      <Button className="button dark double" onClick={() => onDigit(0)} aria-label="zero">0</Button>
      <Button className="button dark" onClick={onDecimal} aria-label="decimal">.</Button>
      <Button className="button orange" onClick={() => onOperator('=')} aria-label="equals">=</Button>
    </div>
  </div>
);

export default ButtonPanel;
