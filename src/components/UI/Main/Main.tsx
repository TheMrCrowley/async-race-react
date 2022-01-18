import React from 'react';
import { Outlet } from 'react-router-dom';
import MainClassNames from './enum';
import mainClasses from './main.module.css';

function Main() {
  return (
    <div className={mainClasses[MainClassNames.MAIN]}>
      <div className={mainClasses[MainClassNames.CONTAINER]}>
        <Outlet />
      </div>
    </div>
  );
}

export default Main;
