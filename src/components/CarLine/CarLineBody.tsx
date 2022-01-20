import React, { FC, LegacyRef, RefObject, useRef, useState } from 'react';
import styled from 'styled-components';
import { CarLineButtonsText } from './enum';

import { ReactComponent as CarSvg } from './car.svg';
import { ReactComponent as FinishSvg } from './finish.svg';
import { StyledButton } from '../UI/Button/MyButton';
import FetchService from '../../API/FetchService';

interface CarLineBodyProps {
  color: string;
  id: number;
}

const StyledCarLineBody = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: 100px;
  svg {
    max-width: 100%;
    height: auto;
  }
`;

const StyledStartWrapper = styled.div`
  display: flex;
`;

type CarWrapperProps = {
  ref?: LegacyRef<HTMLDivElement>;
  color: string;
};

const StyledCarWrapper = styled.div<CarWrapperProps>`
  width: 150px;
  align-self: flex-end;
  animation-duration: 1s;
  animation-name: drive;
  fill: ${props => props.color || '#fecb00'};
`;

const StyledFlagWrapper = styled.div`
  width: 100px;
  transform: translate(-200px, -1rem);
`;

const CarEngineButton = styled(StyledButton)`
  align-self: flex-start;
  max-height: 50%;
  margin-right: 1rem;
`;

const CarLineBody: FC<CarLineBodyProps> = ({ color, id }) => {
  const [requestId, setRequestId] = useState<number>(0);
  const [drive, setDrive] = useState<boolean>(false);
  const carImage = useRef<HTMLDivElement>();
  const flagImage = useRef<HTMLDivElement>();

  const stopAnimation = () => {
    window.cancelAnimationFrame(requestId);
  };

  const resetCarPosition = () => {
    const car = carImage.current as HTMLDivElement;
    car.style.transform = 'translateX(0px)';
  };

  const tick = (startPoint: number, endPoint: number, step: number) => {
    const car = carImage.current as HTMLDivElement;
    let curPoint = startPoint;
    if (curPoint < endPoint) {
      curPoint += step;
      car.style.transform = `translateX(${curPoint}%)`;
      setRequestId(
        window.requestAnimationFrame(() => tick(curPoint, endPoint, step))
      );
    }
  };

  const animation = (time: number, fps: number) => {
    const car = carImage.current as HTMLDivElement;
    const flag = flagImage.current as HTMLDivElement;
    const endPoint =
      ((flag.offsetLeft - flag.clientWidth - car.clientWidth) * 100) /
      car.clientWidth;
    const step = endPoint / ((time / 1000) * fps);
    window.requestAnimationFrame(() => tick(0, endPoint, step));
  };

  const handleStart = async () => {
    const startResponse = await FetchService.startEngine(id);
    console.log(startResponse);
  };

  return (
    <StyledCarLineBody>
      <StyledStartWrapper>
        <CarEngineButton
          gray={drive}
          onClick={() => {
            handleStart();
            setDrive(true);
            animation(5000, 144);
          }}
          disabled={drive}
        >
          {CarLineButtonsText.START}
        </CarEngineButton>
        <CarEngineButton
          gray={!drive}
          disabled={!drive}
          onClick={() => {
            setDrive(false);
            stopAnimation();
            resetCarPosition();
          }}
        >
          {CarLineButtonsText.STOP}
        </CarEngineButton>
        <StyledCarWrapper
          ref={carImage as RefObject<HTMLDivElement>}
          color={color}
        >
          <CarSvg />
        </StyledCarWrapper>
      </StyledStartWrapper>
      <StyledFlagWrapper ref={flagImage as RefObject<HTMLDivElement>}>
        <FinishSvg />
      </StyledFlagWrapper>
    </StyledCarLineBody>
  );
};

export default CarLineBody;
