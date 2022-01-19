import React, { FC } from 'react';
import styled from 'styled-components';
import Container from '../Container/Container';
import { FooterLinks } from './enum';
import FooterLink from './FooterLink';
import { ReactComponent as GitHubLogo } from './gh.svg';
import { ReactComponent as RsLogo } from './rs.svg';

const StyledGhLogo = styled(GitHubLogo)`
  max-width: 100%;
  height: auto;
  filter: invert(1);
  transition: 0.2s filter ease-in-out;
  &:hover {
    filter: invert(83%) sepia(64%) saturate(3075%) brightness(97%)
      contrast(105%);
  }
`;

const StyledRsLogo = styled(RsLogo)`
  max-width: 100%;
  height: auto;
  filter: invert(1);
  transition: 0.2s filter ease-in-out;
  &:hover {
    filter: invert(83%) sepia(64%) saturate(3075%) brightness(97%)
      contrast(105%);
  }
`;

const StyledFooterWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
  div {
    color: white;
    font-size: 24px;
  }
`;

const StyledFooter = styled.footer`
  flex: 1 1 auto;
  max-height: 90px;
  background-color: #202026;
  display: flex;
  align-items: center;
  transition: 0.5s all ease-in-out;
`;

const Footer: FC = () => {
  return (
    <StyledFooter>
      <Container>
        <StyledFooterWrapper>
          <FooterLink href={FooterLinks.GH_LINK} width="10%">
            <StyledGhLogo />
          </FooterLink>
          <div>2022</div>
          <FooterLink href={FooterLinks.RS_LINK} width="20%">
            <StyledRsLogo />
          </FooterLink>
        </StyledFooterWrapper>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
