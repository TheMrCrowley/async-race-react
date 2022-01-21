export interface CarData {
  name: string;
  color: string;
  id: number;
}

export interface EngineResponse {
  velocity: number;
  distance: number;
}

export type DriveResponse = { success: boolean };
