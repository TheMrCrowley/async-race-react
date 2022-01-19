import React, { FC } from 'react';
import styled from 'styled-components';
import { CarLineButtonsText } from './enum';
import { StyledButton } from '../Button/MyButton';

interface CarLineHeaderProps {
  name: string;
}

const StyledCarLineHeader = styled.div`
  display: flex;
  align-items: center;
  width: 30%;
  margin-bottom: 1rem;
`;
const StyledCarName = styled.div`
  font-size: 24px;
  color: #fff;
`;
const CarLineHeaderButton = styled(StyledButton)`
  margin-right: 1rem;
  font-size: 18px;
`;

const CarLineHeader: FC<CarLineHeaderProps> = ({ name }) => {
  return (
    <StyledCarLineHeader>
      <CarLineHeaderButton onClick={() => console.log(this)}>
        {CarLineButtonsText.SELECT}
      </CarLineHeaderButton>
      <CarLineHeaderButton onClick={() => console.log(this)}>
        {CarLineButtonsText.REMOVE}
      </CarLineHeaderButton>
      <StyledCarName>{name}</StyledCarName>
    </StyledCarLineHeader>
  );
};

export default CarLineHeader;
