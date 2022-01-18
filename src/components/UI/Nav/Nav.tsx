import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavClasses, NavButtonsTextContent } from './enum';
import navClasses from './nav.module.css';
import GeneralClassNames from '../../../enum';

const Nav: FC = () => {
  const navigate = useNavigate();
  return (
    <nav className={navClasses[NavClasses.NAV]}>
      <button
        className={GeneralClassNames.BTN}
        type="button"
        onClick={() => navigate('/garage', { replace: true })}
      >
        {NavButtonsTextContent.GARAGE}
      </button>
      <button
        className={GeneralClassNames.BTN}
        type="button"
        onClick={() => navigate('/winners', { replace: true })}
      >
        {NavButtonsTextContent.WINNERS}
      </button>
    </nav>
  );
};

export default Nav;
