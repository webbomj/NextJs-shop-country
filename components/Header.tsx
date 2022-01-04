import React, {FC, useEffect, useState} from 'react';
import Image from 'next/image'
import styles from '../styles/Header.module.scss';
import Comparison from './ui/icons/Comparison';
import { useRouter } from 'next/router';
import Cart from './ui/icons/Cart';
import Search from './ui/icons/Search';
import Logo from '../public/img/Logo.png';
import Link from 'next/link';


const Header: FC = () => {
  const router = useRouter();
  // const localComparison = JSON.parse(localStorage.getItem('comparison')).length || 0;
  const [comparison, setComparison] = useState(0)
  const [cart, setCart] = useState(0)
  // let countComparison = localStorage.getItem('comparison') ? JSON.parse(localStorage.getItem('comparison')).length : 0;
  // let countCart = localStorage?.getItem('cart') ? JSON.parse(localStorage.getItem('cart')).length : 0;

  // useEffect(() => {
  //   setCart(countCart)
  //   setComparison(countComparison)
  // }, [countComparison, countCart])


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
        <div className={styles.iconItem} onClick={() => router.push(`${process.env.NEXT_PUBLIC_API_URL}comparisons`)}>          
          <Comparison width='20px' height='20px' color='#e86a23'/>
          <span>Comparison</span>
          <div className={comparison === 0 ? styles.iconCounterHide : styles.iconCounter}>{comparison}</div>
        </div>
        <div className={styles.iconItem} onClick={() => router.push(`${process.env.NEXT_PUBLIC_API_URL}cart`)}> 
          <Cart width='20px' height='20px' color='#e86a23'/>
          <span>Cart</span>
          <div className={cart === 0 ? styles.iconCounterHide : styles.iconCounter}>{cart}</div>
        </div>
        
      </div>
    </header>
  );
};

export default Header;