import styled from 'styled-components';
import { CarWrapperProps } from './types';
import { StyledButton } from '../UI/Button/MyButton';

export const StyledCarLineBody = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: 100px;
  svg {
    max-width: 100%;
    height: auto;
  }
`;

export const StyledStartWrapper = styled.div`
  display: flex;
`;

export const StyledCarWrapper = styled.div<CarWrapperProps>`
  width: 150px;
  align-self: flex-end;
  animation-duration: 1s;
  animation-name: drive;
  fill: ${props => props.color || '#fecb00'};
`;

export const StyledFlagWrapper = styled.div`
  width: 100px;
  transform: translate(-200px, -1rem);
`;

export const CarEngineButton = styled(StyledButton)`
  align-self: flex-start;
  max-height: 50%;
  margin-right: 1rem;
`;
