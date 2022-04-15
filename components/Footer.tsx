import Link from 'next/link';
import React, {FC} from 'react';
import styles from '../styles/Footer.module.scss';
import { useEffect } from 'react';


const Footer: FC = () => {
  useEffect(() => {
    if (localStorage.getItem('comparison') === null || localStorage.getItem('comparison') === null) {
      localStorage.setItem('comparison', '[]')
      localStorage.setItem('cart', '[]')
    }
  },[])
  return (
    <footer className={styles.footer}>
      <div>Shopka &#169; {new Date().getFullYear()}</div> 
      <Link href='tel:+1-415-555-0177'><a className={styles.a}>+1-415-555-0177</a></Link>
      <div>4560 Delaware Avenue</div> 
    </footer>
  );
};

export default Footer;