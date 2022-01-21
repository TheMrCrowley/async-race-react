import { LegacyRef } from 'react';

export type CarWrapperProps = {
  ref?: LegacyRef<HTMLDivElement>;
  color: string;
};

export interface CarLineBodyProps {
  color: string;
  id: number;
  getStartHandler: (fn: () => Promise<void>) => void;
  getStopHandler: (fn: () => Promise<void>) => void;
}

export type Func = () => Promise<void>;

export interface CarLineProps {
  data: CarLineData;
  remove: (id: number) => Promise<void>;
  getStartHandler: (fn: () => Promise<void>) => void;
  getStopHandler: (fn: () => Promise<void>) => void;
}

export interface CarLineData {
  name: string;
  color: string;
  id: number;
}
