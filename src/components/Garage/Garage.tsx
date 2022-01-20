import React, { useEffect, useState } from 'react';
import { CarLinesWrapper, StyledGarageSection } from './style';
import GarageHeader from './GarageHeader';
import FetchService from '../../API/FetchService';
import { CarData } from '../../API/types';
import CarLine from '../CarLine/CarLine';
import useFetching from '../../hooks/fetchDara';
import Loader from '../UI/Loader/Loader';

const Garage = () => {
  console.log('Garage render');
  const [cars, setCars] = useState<CarData[]>([]);
  // const [updateActive, setUpdateActive] = useState<boolean>(false);
  const [getCars, isCarsLoading] = useFetching(async () => {
    const carsResponse = await FetchService.getCars();
    setCars(carsResponse);
  });

  useEffect(() => {
    getCars();
  }, []);

  const removeCar = async (id: number) => {
    await FetchService.removeCar(id);
    getCars();
  };

  // const changeCar = async () => {
  //   setUpdateActive(true);
  // };

  return (
    <StyledGarageSection>
      <GarageHeader />
      {isCarsLoading ? (
        <Loader />
      ) : (
        <CarLinesWrapper>
          {cars.map(car => (
            <CarLine remove={removeCar} key={car.id} data={car} />
          ))}
        </CarLinesWrapper>
      )}
    </StyledGarageSection>
  );
};

export default Garage;
