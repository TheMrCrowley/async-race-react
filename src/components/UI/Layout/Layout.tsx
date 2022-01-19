import React from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

const StyledWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: stretch;
  flex-direction: column;
  background-color: #202026;
`;

const StyledMainContent = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
`;

function Layout() {
  return (
    <StyledWrapper>
      <StyledMainContent>
        <Header />
        <Main>
          <Outlet />
        </Main>
      </StyledMainContent>
      <Footer />
    </StyledWrapper>
  );
}

export default Layout;
