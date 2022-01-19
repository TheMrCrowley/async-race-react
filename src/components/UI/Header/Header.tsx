import React, { FC } from 'react';
import styled from 'styled-components';
import Nav from '../Nav/Nav';
import { HeaderTextContent } from './enum';

import Title from './Title';

const StyledHeader = styled.header`
  display: flex;
  position: relative;
  justify-content: space-evenly;
  align-items: center;
  padding: 1rem 0;
  min-height: 100px;
  width: 100%;
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    display: block;
    height: 4px;
    background-color: #fecb00;
    width: 100%;
  }
`;

const Header: FC = () => {
  return (
    <StyledHeader>
      <Nav />
      <Title>{HeaderTextContent.TITLE}</Title>
    </StyledHeader>
  );
};

export default Header;
