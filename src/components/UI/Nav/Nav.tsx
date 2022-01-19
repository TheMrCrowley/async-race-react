import React, { FC } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { NavButtonsTextContent } from './enum';
import MyButton from '../Button/MyButton';

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 20%;
`;

const Nav: FC = () => {
  const navigate = useNavigate();
  return (
    <StyledNav>
      <MyButton onClick={() => navigate('/garage', { replace: true })}>
        {NavButtonsTextContent.GARAGE}
      </MyButton>
      <MyButton onClick={() => navigate('/winners', { replace: true })}>
        {NavButtonsTextContent.WINNERS}
      </MyButton>
    </StyledNav>
  );
};

export default Nav;
