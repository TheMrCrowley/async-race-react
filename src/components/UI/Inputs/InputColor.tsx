import React, { FC } from 'react';
import styled from 'styled-components';

type InputColorProps = {
  color?: string;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const StyledInputColor = styled.input`
  min-width: 2rem;
  margin-right: 2rem;
`;

const InputColor: FC<InputColorProps> = ({ color, disabled, onChange }) => {
  return (
    <StyledInputColor
      onChange={onChange}
      type="color"
      disabled={disabled}
      value={color}
    />
  );
};

export default InputColor;
