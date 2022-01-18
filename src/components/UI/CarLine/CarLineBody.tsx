import React, { FC, LegacyRef, useRef, useState } from 'react';
import carLineClasses from './car-line.module.css';
import { CarLineButtonsText, CarLineClassNames } from './enum';

import { ReactComponent as CarSvg } from './car.svg';
import { ReactComponent as FinishSvg } from './finish.svg';
import GeneralClassNames from '../../../enum';
import MyButton from '../Button/MyButton';

interface CarLineBodyProps {
  color: string;
}

const CarLineBody: FC<CarLineBodyProps> = ({ color }) => {
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

  const activeButton = (): string => {
    return drive
      ? [
          GeneralClassNames.BTN,
          GeneralClassNames.BTN_ACTIVE,
          carLineClasses[CarLineClassNames.CAR_LINE_BODY_BTN],
        ].join(' ')
      : [
          GeneralClassNames.BTN,
          carLineClasses[CarLineClassNames.CAR_LINE_BODY_BTN],
        ].join(' ');
  };
  const removeGray = (): string => {
    return drive
      ? [
          GeneralClassNames.BTN,
          carLineClasses[CarLineClassNames.CAR_LINE_BODY_BTN],
        ].join(' ')
      : [
          GeneralClassNames.BTN,
          carLineClasses[CarLineClassNames.CAR_LINE_BODY_BTN],
          carLineClasses[CarLineClassNames.GRAY],
        ].join(' ');
  };
  return (
    <div className={carLineClasses[CarLineClassNames.CAR_LINE_BODY]}>
      <div className={carLineClasses[CarLineClassNames.START_WRAPPER]}>
        <MyButton
          onClick={() => {
            setDrive(true);
            animation(5000, 144);
          }}
          className={activeButton()}
          disabled={false}
        >
          {CarLineButtonsText.START}
        </MyButton>
        <MyButton
          disabled={!drive}
          onClick={() => {
            setDrive(false);
            stopAnimation();
            resetCarPosition();
          }}
          className={removeGray()}
        >
          {CarLineButtonsText.STOP}
        </MyButton>
        <div
          ref={carImage as LegacyRef<HTMLDivElement>}
          className={carLineClasses[CarLineClassNames.CAR_SVG_WRAPPER]}
          style={{ fill: color }}
        >
          <CarSvg />
        </div>
      </div>
      <div
        ref={flagImage as LegacyRef<HTMLDivElement>}
        className={carLineClasses[CarLineClassNames.FINISH_SVG_WRAPPER]}
      >
        <FinishSvg />
      </div>
    </div>
  );
};

export default CarLineBody;
