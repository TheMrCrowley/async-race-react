import React, { FC } from 'react';
import styled from 'styled-components';

type TitleProps = {
  children: string;
};

const StyledTitle = styled.h1`
  font-family: 'Pacifico', serif;
  color: #fff;
  font-size: 48px;
  line-height: 48px;
`;

const Title: FC<TitleProps> = ({ children }) => {
  return <StyledTitle>{children}</StyledTitle>;
};

export default Title;
