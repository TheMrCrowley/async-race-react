import React, { FC } from 'react';
import Nav from '../Nav/Nav';
import { HeaderClasses, HeaderTextContent } from './enum';
import headerClasses from './header.module.css';

const Header: FC = () => {
  return (
    <header className={headerClasses[HeaderClasses.HEADER]}>
      <Nav />
      <h1 className={headerClasses[HeaderClasses.HEADER_TITLE]}>
        {HeaderTextContent.TITLE}
      </h1>
    </header>
  );
};

export default Header;
