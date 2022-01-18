import React from 'react';
import Footer from '../Footer/Footer';

import Header from '../Header/Header';
import Main from '../Main/Main';
import LayoutClassNames from './enum';
import layoutClasses from './layout.module.css';

function Layout() {
  return (
    <div className={layoutClasses[LayoutClassNames.WRAPPER]}>
      <div className={layoutClasses[LayoutClassNames.TOP_CONTENT]}>
        <Header />
        <Main />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
