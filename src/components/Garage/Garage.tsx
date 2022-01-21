import React, { FC, useEffect, useState } from 'react';
import { CarLinesWrapper, StyledGarageSection } from './style';
import GarageHeader from './GarageHeader';
import FetchService from '../../API/FetchService';
import { CarData } from '../../API/types';
import CarLine from '../CarLine/CarLine';
// import useFetching from '../../hooks/fetchDara';
// import Loader from '../UI/Loader/Loader';
import { Func } from '../CarLine/types';

const Garage: FC = () => {
  const [cars, setCars] = useState<CarData[]>([]);
  const [startHandlers, setStartHandlers] = useState<Func[]>([]);
  const [stopHandlers, setStopHandlers] = useState<Func[]>([]);
  // const [getCars, isCarsLoading] = useFetching(async () => {
  //   const carsResponse = await FetchService.getCars();
  //   setCars(carsResponse);
  // });
  console.log('Start', startHandlers);
  console.log('Stop', stopHandlers);

  useEffect(() => {
    FetchService.getCars().then(data => setCars(data));
    // getCars();
  }, []);

  const removeCar = async (id: number) => {
    await FetchService.removeCar(id);
    // getCars();
  };

  const getStartHandlers = (fn: Func) => {
    setStartHandlers(prev => [...prev, fn]);
  };

  const getStopHandlers = (fn: Func) => {
    setStopHandlers(prev => [...prev, fn]);
  };

  return (
    <StyledGarageSection>
      <GarageHeader />
      <CarLinesWrapper>
        {cars.map(car => (
          <CarLine
            getStartHandler={getStartHandlers}
            getStopHandler={getStopHandlers}
            remove={removeCar}
            key={car.id}
            data={car}
          />
        ))}
      </CarLinesWrapper>
      {/* {isCarsLoading ? (
        <Loader />
      ) : (
        <CarLinesWrapper>
          {cars.map(car => (
            <CarLine
              getStartHandler={getStartHandlers}
              getStopHandler={getStopHandlers}
              remove={removeCar}
              key={car.id}
              data={car}
            />
          ))}
        </CarLinesWrapper>
      )} */}
    </StyledGarageSection>
  );
};

export default Garage;
