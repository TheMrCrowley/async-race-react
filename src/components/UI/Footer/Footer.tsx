import React from 'react';
import { FooterClassNames, FooterLinks } from './enum';
import footerClasses from './footer.module.css';
import { ReactComponent as BrandIcon } from './gh.svg';

console.log(BrandIcon);
function Footer() {
  return (
    <footer className={footerClasses[FooterClassNames.FOOTER]}>
      <div className={footerClasses[FooterClassNames.CONTAINER]}>
        <div className={footerClasses[FooterClassNames.FOOTER_CONTENT]}>
          <a
            href={FooterLinks.GH_LINK}
            className={footerClasses[FooterClassNames.GH_LINK]}
          >
            <BrandIcon className={footerClasses[FooterClassNames.FOOTER_IMG]} />
          </a>
          <div className={footerClasses[FooterClassNames.CREATED]}>2022</div>
          <a
            href={FooterLinks.RS_LINK}
            className={footerClasses[FooterClassNames.RS_LINK]}
          >
            <BrandIcon className={footerClasses[FooterClassNames.FOOTER_IMG]} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
