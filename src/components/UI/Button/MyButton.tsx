import React, { FC } from 'react';
import styled from 'styled-components';

export const StyledButton = styled.button<ButtonProps>`
  padding: 0.5rem 1rem;
  font-size: ${props => props.fontSize || '1.5rem'};
  color: #fff;
  cursor: pointer;
  border: 2px solid #fecb00;
  border-radius: 1.5rem;
  transition: 0.5s background-color, border-color, color ease-in-out;
  &:hover {
    background-color: #fecb00;
    border-color: transparent;
    color: #202026;
  }
  filter: grayscale(${props => (props.gray ? 1 : 0)});
`;

interface ButtonProps {
  children: React.ReactNode | React.ReactElement;
  onClick: () => void;
  disabled?: boolean;
  fontSize?: string;
  gray?: boolean;
}

const MyButton: FC<ButtonProps> = ({
  disabled,
  children,
  onClick,
  fontSize,
  gray,
}) => {
  return (
    <StyledButton
      gray={gray}
      disabled={disabled}
      type="button"
      onClick={onClick}
      fontSize={fontSize}
    >
      {children}
    </StyledButton>
  );
};

export default MyButton;
