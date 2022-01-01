import React, { ReactNode, ReactChildren } from 'react';
import Header from './Header';
import Footer from './Footer';
import styles from '../styles/Mainlayout.module.scss';
import MainMenu from './MainMenu';

interface MainlayoutProps {
  children: ReactNode | ReactChildren
}

const Mainlayout = ({children}: MainlayoutProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <Header/>
      <div className={styles.wrapperContent}>
        <MainMenu/>
        {children}
      </div>
      <Footer/>
    </div>
  );
};

export default Mainlayout;