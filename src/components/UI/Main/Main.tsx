import React, { FC } from 'react';
import styled from 'styled-components';
import Container from '../Container/Container';

const StyledMain = styled.main`
  padding: 1rem 0;
`;

type MainProps = {
  children: React.ReactElement | React.ReactNode;
};
const Main: FC<MainProps> = ({ children }) => {
  return (
    <StyledMain>
      <Container>{children}</Container>
    </StyledMain>
  );
};

export default Main;
