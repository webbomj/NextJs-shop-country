import React, {FC} from 'react';
import Image from 'next/image';
import styles from '../styles/MainMenu.module.scss';
import Link from 'next/link';

const MainMenu:FC = () => {
  return (
    <div className={styles.mainMenu}>
      <div className={styles.links}><Link href='/category/africa'><a className={styles.a}><Image src='/img/flags/south-africa.png' alt="Africa-logo" width='53px' height='53px' placeholder='empty' /><span>Africa</span></a></Link></div>
      <div className={styles.links}><Link href='/category/americas'><a className={styles.a}><Image src='/img/flags/united-states.png' alt="Americas-logo" width='53px' height='53px' placeholder='empty' /><span>Americas</span></a></Link></div>
      <div className={styles.links}><Link href='/category/asia'><a className={styles.a}><Image src='/img/flags/china.png' alt="Asia-logo" width='53px' height='53px' placeholder='empty' /><span>Asia</span></a></Link></div>
      <div className={styles.links}><Link href='/category/europe'><a className={styles.a}><Image src='/img/flags/russia.png' alt="Europe-logo" width='53px' height='53px' placeholder='empty' /><span>Europe</span></a></Link></div>
      <div className={styles.links}><Link href='/category/oceania'><a className={styles.a}><Image src='/img/flags/australia.png' alt="Oceania-logo" width='53px' height='53px' placeholder='empty' /><span>Oceania</span></a></Link></div>
    </div>
  );
};

export default MainMenu;