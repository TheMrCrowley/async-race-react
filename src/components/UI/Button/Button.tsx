import React from 'react';
import classes from './button.module.css';

interface ButtonProps {
  textContent: string;
}

function Button({ textContent }: ButtonProps) {
  return (
    <button type="button" className={classes.btn}>
      {textContent}
    </button>
  );
}

export default Button;
