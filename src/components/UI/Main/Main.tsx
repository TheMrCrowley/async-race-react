import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import MainClassNames from './enum';
import mainClasses from './main.module.css';

const Main: FC = () => {
  return (
    <div className={mainClasses[MainClassNames.MAIN]}>
      <div className={MainClassNames.CONTAINER}>
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
