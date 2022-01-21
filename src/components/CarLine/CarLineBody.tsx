import React, { FC, RefObject, useEffect, useRef, useState } from 'react';
import FetchService from '../../API/FetchService';
import { CarLineBodyProps } from './types';
import { CarLineButtonsText } from './enum';
import { ReactComponent as CarSvg } from './car.svg';
import { ReactComponent as FinishSvg } from './finish.svg';
import {
  CarEngineButton,
  StyledCarLineBody,
  StyledCarWrapper,
  StyledFlagWrapper,
  StyledStartWrapper,
} from './styleCarLineBody';

const CarLineBody: FC<CarLineBodyProps> = ({
  color,
  id,
  getStartHandler,
  getStopHandler,
}) => {
  const [drive, setDrive] = useState<boolean>(false);
  const carImage = useRef<HTMLDivElement>();
  const flagImage = useRef<HTMLDivElement>();

  const stopAnimation = () => {
    const car = carImage.current as HTMLDivElement;
    window.cancelAnimationFrame(parseInt(car.dataset.requestId as string, 10));
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

      car.dataset.requestId = window
        .requestAnimationFrame(() => tick(curPoint, endPoint, step))
        .toString();
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
    setDrive(true);
    const startResponse = await FetchService.startEngine(id);
    animation(startResponse.distance / startResponse.velocity, 60);
    await FetchService.switchToDrive(id)
      .then(() => console.log('won'))
      .catch(() => stopAnimation());
  };

  const handleStop = async () => {
    setDrive(false);
    stopAnimation();
    await FetchService.stopEngine(id);
    resetCarPosition();
  };

  useEffect(() => {
    getStartHandler(handleStart);
    getStopHandler(handleStop);
  }, []);

  return (
    <StyledCarLineBody>
      <StyledStartWrapper>
        <CarEngineButton gray={drive} onClick={handleStart} disabled={drive}>
          {CarLineButtonsText.START}
        </CarEngineButton>
        <CarEngineButton gray={!drive} disabled={!drive} onClick={handleStop}>
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
