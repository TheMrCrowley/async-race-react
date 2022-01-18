import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import { NavClasses, NavButtonsTextContent } from './enum';
import navClasses from './nav.module.css';

function Nav() {
  const navigate = useNavigate();
  return (
    <nav className={navClasses[NavClasses.NAV]}>
      <Button
        onClick={() => navigate('/garage', { replace: true })}
        textContent={NavButtonsTextContent.GARAGE}
      />
      <Button
        onClick={() => navigate('/winners', { replace: true })}
        textContent={NavButtonsTextContent.WINNERS}
      />
    </nav>
  );
}

export default Nav;
