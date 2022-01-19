import React, { FC } from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  max-width: 1440px;
  height: 100%;
  margin: 0 auto;
  overflow: hidden;
`;

type ContainerProps = {
  children: React.ReactNode | React.ReactElement;
};
const Container: FC<ContainerProps> = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
