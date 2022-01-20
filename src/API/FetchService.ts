import axios from 'axios';
import { CarData, DriveResponse, EngineResponse } from './types';
import { GarageSettings, APIUrls, EngineStatus } from './enum';

export default class FetchService {
  static getCars = async (
    page?: number,
    limit = GarageSettings.LIMIT
  ): Promise<CarData[]> => {
    const response = await axios.get<CarData[]>(APIUrls.CARS, {
      params: { _page: page, _limit: limit },
    });
    return response.data;
  };

  static removeCar = async (carId: number): Promise<void> => {
    await axios.delete<Record<never, never>>(`${APIUrls.CARS}/${carId}`);
  };

  static updateCar = async (
    carId: number,
    data: Partial<CarData>
  ): Promise<void> => {
    await axios.put<CarData>(`${APIUrls.CARS}/${carId}`, data);
  };

  static startEngine = async (carId: number): Promise<EngineResponse> => {
    const response = await axios.patch<EngineResponse>(APIUrls.ENGINE, null, {
      params: { id: carId, status: EngineStatus.START },
    });
    return response.data;
  };

  static stopEngine = async (carId: number): Promise<EngineResponse> => {
    const response = await axios.patch<EngineResponse>(APIUrls.ENGINE, null, {
      params: { id: carId, status: EngineStatus.STOP },
    });
    return response.data;
  };

  static switchToDrive = async (carId: number): Promise<DriveResponse> => {
    const response = await axios.patch<DriveResponse>(APIUrls.ENGINE, null, {
      params: { id: carId, status: 'drive' },
    });
    return response.data;
  };
}
