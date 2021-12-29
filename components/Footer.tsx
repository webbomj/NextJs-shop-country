import Link from 'next/link';
import React from 'react';
import styles from '../styles/Footer.module.scss';


const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>Shopka &#169; {new Date().getFullYear()}</div> 
      <Link href='tel:+1-415-555-0177'><a>+1-415-555-0177</a></Link>
      <div>4560 Delaware Avenue</div> 
    </footer>
  );
};

export default Footer;