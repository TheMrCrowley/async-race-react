import React, { FC, useState } from 'react';
import styled from 'styled-components';
import FetchService from '../../API/FetchService';
import CarLineBody from './CarLineBody';
import CarLineHeader from './CarLineHeader';

export interface CarLineData {
  name: string;
  color: string;
  id: number;
}

interface CarLineProps {
  data: CarLineData;
  remove: (id: number) => Promise<void>;
}

const StyledCarLine = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 1rem;
  &:after {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 4px;
    background-color: #fecb00;
  }
`;

const CarLine: FC<CarLineProps> = ({ data, remove }) => {
  const [name, setName] = useState<string>(data.name);
  const [color, setColor] = useState<string>(data.color);
  const updateCar = async () => {
    if (name !== data.name || color !== data.color) {
      const newCar = {
        name,
        color,
      };
      await FetchService.updateCar(data.id, newCar);
    }
  };
  return (
    <StyledCarLine>
      <CarLineHeader
        remove={remove}
        name={name}
        color={color}
        id={data.id}
        updateCar={updateCar}
        changeName={setName}
        changeColor={setColor}
      />
      <CarLineBody id={data.id} color={color} />
    </StyledCarLine>
  );
};

export default CarLine;
