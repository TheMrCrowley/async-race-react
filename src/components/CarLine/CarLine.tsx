import React, { FC, useState, useEffect } from 'react';
import styled from 'styled-components';
import FetchService from '../../API/FetchService';
import CarLineBody from './CarLineBody';
import CarLineHeader from './CarLineHeader';
import { CarLineProps, Func } from './types';

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

const CarLine: FC<CarLineProps> = ({
  data,
  remove,
  getStartHandler,
  getStopHandler,
}) => {
  const [name, setName] = useState<string>(data.name);
  const [color, setColor] = useState<string>(data.color);
  const [startHandler, setStartHandler] = useState<Func>();
  const [stopHandler, setStopHandler] = useState<Func>();
  useEffect(() => {
    if (startHandler && stopHandler) {
      getStartHandler(startHandler as Func);
      getStopHandler(stopHandler as Func);
    }
  }, [startHandler, stopHandler]);

  const updateCar = async () => {
    if (name !== data.name || color !== data.color) {
      const newCar = {
        name,
        color,
      };
      await FetchService.updateCar(data.id, newCar);
    }
  };

  const getEngineStartHandler = (fn: () => Promise<void>) => {
    setStartHandler(() => fn);
  };

  const getEngineStopHandler = (fn: () => Promise<void>) => {
    setStopHandler(() => fn);
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
      <CarLineBody
        getStartHandler={getEngineStartHandler}
        getStopHandler={getEngineStopHandler}
        id={data.id}
        color={color}
      />
    </StyledCarLine>
  );
};

export default CarLine;
