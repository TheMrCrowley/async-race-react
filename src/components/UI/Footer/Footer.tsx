import React, { FC } from 'react';
import { FooterClassNames, FooterLinks } from './enum';
import footerClasses from './footer.module.css';
import { ReactComponent as GitHubLogo } from './gh.svg';
import { ReactComponent as RsLogo } from './rs.svg';

const Footer: FC = () => {
  return (
    <footer className={footerClasses[FooterClassNames.FOOTER]}>
      <div className={FooterClassNames.CONTAINER}>
        <div className={footerClasses[FooterClassNames.FOOTER_CONTENT]}>
          <a
            href={FooterLinks.GH_LINK}
            className={footerClasses[FooterClassNames.GH_LINK]}
          >
            <GitHubLogo
              className={footerClasses[FooterClassNames.FOOTER_IMG]}
            />
          </a>
          <div className={footerClasses[FooterClassNames.CREATED]}>2022</div>
          <a
            href={FooterLinks.RS_LINK}
            className={footerClasses[FooterClassNames.RS_LINK]}
          >
            <RsLogo className={footerClasses[FooterClassNames.FOOTER_IMG]} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
