import React, { FC } from 'react';
import carLineClasses from './car-line.module.css';
import { CarLineButtonsText, CarLineClassNames } from './enum';
import GeneralClassNames from '../../../enum';

interface CarLineHeaderProps {
  name: string;
}

const CarLineHeader: FC<CarLineHeaderProps> = ({ name }) => {
  return (
    <div className={carLineClasses[CarLineClassNames.CAR_LINE_HEADER]}>
      <button
        type="button"
        onClick={() => console.log(this)}
        className={[
          GeneralClassNames.BTN,
          carLineClasses[CarLineClassNames.SELECT_BTN],
        ].join(' ')}
      >
        {CarLineButtonsText.SELECT}
      </button>
      <button
        type="button"
        onClick={() => console.log(this)}
        className={[
          GeneralClassNames.BTN,
          carLineClasses[CarLineClassNames.SELECT_BTN],
        ].join(' ')}
      >
        {CarLineButtonsText.REMOVE}
      </button>
      <div className={carLineClasses[CarLineClassNames.CAR_NAME]}>{name}</div>
    </div>
  );
};

export default CarLineHeader;
