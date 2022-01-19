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
  width: 50%;
  margin-bottom: 1rem;
`;
const StyledCarName = styled.div`
  font-size: 24px;
  color: #fff;
  margin-right: 1rem;
`;
const CarLineHeaderButton = styled(StyledButton)`
  margin-right: 1rem;
  font-size: 18px;
`;

const CarLineHeader: FC<CarLineHeaderProps> = ({ name }) => {
  console.log('CarLineHeader render');
  return (
    <StyledCarLineHeader>
      <CarLineHeaderButton onClick={() => console.log('Click on Select')}>
        {CarLineButtonsText.SELECT}
      </CarLineHeaderButton>
      <CarLineHeaderButton onClick={() => console.log('Click on Remove')}>
        {CarLineButtonsText.REMOVE}
      </CarLineHeaderButton>
      <StyledCarName>{name}</StyledCarName>
    </StyledCarLineHeader>
  );
};

export default CarLineHeader;
