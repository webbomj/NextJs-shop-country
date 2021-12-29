import React from 'react';
import Image from 'next/image';
import oceania from '../public/img/flags/australia.png';
import asia from '../public/img/flags/china.png';
import europe from '../public/img/flags/russia.png';
import africa from '../public/img/flags/south-africa.png';
import americas from '../public/img/flags/united-states.png';
import styles from '../styles/MainMenu.module.scss';

const MainMenu = () => {
  return (
    <div className={styles.mainMenu}>
      <div className={styles.links}><Image src='/img/flags/south-africa.png' alt="Africa-logo" width='53px' height='53px' placeholder='empty' /><span>Africa</span></div>
      <div className={styles.links}><Image src='/img/flags/united-states.png' alt="Americas-logo" width='53px' height='53px' placeholder='empty' /><span>Americas</span></div>
      <div className={styles.links}><Image src='/img/flags/china.png' alt="Asia-logo" width='53px' height='53px' placeholder='empty' /><span>Asia</span></div>
      <div className={styles.links}><Image src='/img/flags/russia.png' alt="Europe-logo" width='53px' height='53px' placeholder='empty' /><span>Europe</span></div>
      <div className={styles.links}><Image src='/img/flags/australia.png' alt="Oceania-logo" width='53px' height='53px' placeholder='empty' /><span>Oceania</span></div>
    </div>
  );
};

export default MainMenu;