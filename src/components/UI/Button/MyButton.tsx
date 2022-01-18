import React, { FC } from 'react';

interface ButtonProps {
  children: React.ReactNode | React.ReactElement;
  className: string;
  onClick: () => void;
  disabled: boolean;
}

const MyButton: FC<ButtonProps> = ({
  disabled,
  children,
  className,
  onClick,
}) => {
  return (
    <button
      disabled={disabled}
      type="button"
      className={className}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default MyButton;
