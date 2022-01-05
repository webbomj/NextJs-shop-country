import React, { ReactNode, ReactChildren } from 'react';
import Header from './Header';
import Footer from './Footer';
import styles from '../styles/Mainlayout.module.scss';
import MainMenu from './MainMenu';
import { useRouter } from 'next/router';

interface MainlayoutProps {
  children: ReactNode | ReactChildren
}

const Mainlayout = ({children}: MainlayoutProps): JSX.Element => {
  const router = useRouter();
  return (
    <div className={styles.wrapper}>
      <Header/>
      <div className={styles.wrapperContent}>
        {router.route !== '/' ? <MainMenu/> : null}
        {children}
      </div>
      <Footer/>
    </div>
  );
};

export default Mainlayout;