import React, { FC } from 'react';
import styled from 'styled-components';

type InputTextProps = {
  name?: string;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const StyledInputText = styled.input`
  max-width: 50%;
  width: 100%;
  margin-right: 2rem;
  font-size: 24px;
`;

const InputText: FC<InputTextProps> = ({ name, disabled, onChange }) => {
  return (
    <StyledInputText
      onChange={onChange}
      disabled={disabled}
      placeholder={name}
      type="text"
    />
  );
};

export default InputText;
