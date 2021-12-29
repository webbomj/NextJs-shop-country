import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import styles from '../styles/Mainlayout.module.scss';
import MainMenu from './MainMenu';

interface MainlayoutProps {
  children: ReactNode
}

const Mainlayout = ({children}: MainlayoutProps) => {
  return (
    <div className={styles.wrapper}>
      <Header/>
      <MainMenu/>
        {children}
      <Footer/>
    </div>
  );
};

export default Mainlayout;