import React from 'react';
import Image from 'next/image'
import styles from '../styles/Header.module.scss';
import Comparison from './ui/icons/Comparison';
import Cart from './ui/icons/Cart';
import Search from './ui/icons/Search';
import Logo from '../public/img/Logo.png';
import Link from 'next/link';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/"><a><Image src={Logo} width={100} height={40} alt='Logo'/></a></Link>
      </div>
        <div className={styles.input}> 
          <div className={styles.searchIcon}>
           <Search width='15px' height='15px' color='none'/>
          </div>
           <input/>
        </div>
      <div className={styles.icons}>
        <Comparison width='20px' height='20px' color='#e86a23'/>
        <span>Comparison</span>
        <Cart width='20px' height='20px' color='#e86a23'/>
        <span>Cart</span>
      </div>
    </header>
  );
};

export default Header;