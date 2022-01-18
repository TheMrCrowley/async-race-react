import React, { FC } from 'react';
import { CarLineClassNames } from './enum';
import carLineClasses from './car-line.module.css';
import CarLineBody from './CarLineBody';
import CarLineHeader from './CarLineHeader';

export interface CarLineData {
  name: string;
  color: string;
}

interface CarLineProps {
  data: CarLineData;
}

const CarLine: FC<CarLineProps> = ({ data }) => {
  return (
    <div className={carLineClasses[CarLineClassNames.WRAPPER]}>
      <CarLineHeader name={data.name} />
      <CarLineBody color={data.color} />
    </div>
  );
};

export default CarLine;
