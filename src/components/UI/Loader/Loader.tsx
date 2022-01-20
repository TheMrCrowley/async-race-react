import React from 'react';
import styled, { keyframes } from 'styled-components';

const loaderAnimation = keyframes`
  0% {
    transform: rotate(0deg) scale(1);
  }
  50% {
    transform: rotate(180deg) scale(1.5);
  }
  100% {
    transform: rotate(360deg) scale(1);
  }
`;

const StyledLoader = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 5px dashed #fecb00;
  animation: ${loaderAnimation} 1s infinite linear;
`;
const Loader = () => {
  return <StyledLoader />;
};

export default Loader;
