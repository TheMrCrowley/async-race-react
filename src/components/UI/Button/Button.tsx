import React from 'react';
import classes from './button.module.css';

interface ButtonProps {
  textContent: string;
  onClick: () => void;
}

function Button({ textContent, onClick }: ButtonProps) {
  return (
    <button type="button" className={classes.btn} onClick={onClick}>
      {textContent}
    </button>
  );
}

export default Button;
