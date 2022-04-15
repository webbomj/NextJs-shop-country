import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect } from 'react';
import MainMenu from '../components/MainMenu';
import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
  useEffect(() => {
    if (localStorage.getItem('comparison') === null || localStorage.getItem('comparison') === null) {
      localStorage.setItem('comparison', '[]')
      localStorage.setItem('cart', '[]')
    }
  },[])
  return (
    <>
      <Head>
        <title>Internet shop of countries. Buy countries inexpensively!</title>
        <meta 
          name="description" 
          content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium numquam impedit 
          quaerat mollitia suscipit autem dicta est voluptates reprehenderit optio labore, in inventore non 
          quis at nihil sunt ipsa harum?" />   
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>Shop of countries</h1>
        <span className={styles.text}>Here you can buy any country in any quantity. 
          We sell countries with delivery and on credit. The most reasonable prices for any 
          country. Сhoose the region you need
        </span>
        <MainMenu/>
      </div>
    </>
  )
}

export default Home
