import React, { FC } from 'react';
import styled from 'styled-components';

const StyledFooterLink = styled.a<FooterLinkProps>`
  display: block;
  width: ${props => props.width || '10%'};
  cursor: pointer;
`;

type FooterLinkProps = {
  width?: string;
  children?: React.ReactElement | React.ReactNode;
  href: string;
};

const FooterLink: FC<FooterLinkProps> = ({ width, children, href }) => {
  return (
    <StyledFooterLink href={href} width={width}>
      {children}
    </StyledFooterLink>
  );
};

export default FooterLink;
