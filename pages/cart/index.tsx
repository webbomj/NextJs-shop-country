import React, {FC, useEffect, useState} from 'react';
import CartsList from '../../components/CartsList';
import { CategoryData } from '../../types/category';
import styles from '../../styles/Cart.module.scss';
import Head from 'next/head';

const Cart:FC = () => {
  const [goods, setGoods] = useState<CategoryData[] | []>([]);
  const [total, setTotal] = useState<number>(0);
  const [update, setUpdate] = useState<boolean>(false);
  const [isModal, setIsModal] = useState<boolean>(false);

  useEffect(() => {
    if (localStorage.getItem('cart')) {
      let cartsItem:CategoryData[] = JSON.parse(localStorage.getItem('cart') || '');
      
      setGoods(cartsItem.sort((a, b) => {
        if (a.name.common < b.name.common) {
          return -1;
        }
        if (a.name.common > b.name.common) {
          return 1;
        }
        return 0;
      }))
        /* @ts-ignore */
      setTotal(cartsItem.reduce((acc, cur) => (acc + cur.totalPrice), 0));
    }
  }, [update])

  const deleteLocal = (name: string): void => {   
    let localGoods: CategoryData[] = JSON.parse(localStorage.getItem('cart') || '');
    let newLocalGoods = localGoods.filter(el => el.name.common !== name);
    setGoods(newLocalGoods);
    localStorage.setItem('cart', JSON.stringify(newLocalGoods));
    setUpdate(prev => !prev);
  }

  const changeFlag = () => {
    setUpdate(!update)
  }

  const buyAll = () => {
    setIsModal(!isModal)
  }

  return (
    <>
      <Head>
      <title>Shopping cart</title>  
      <meta name="description" content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Consequuntur quasi ad alias repellat molestias id quia eius. Unde, explicabo corporis? 
        Voluptates repellendus minus tempore eius in totam, rem iure temporibus." />
      </Head>
      <div className={styles.wrapper}>
        <h1 className={styles.h1}>Shopping cart</h1>
        <ul>
          {goods?.length === 0 ? <div className={styles.cartEmpty}>Your basket is empty</div> : null }
          {goods ? goods.map((el:CategoryData): JSX.Element => {
            return (
              <li key={el.name.common}>
                <CartsList item={el} deleteLocal={deleteLocal} changeFlag={changeFlag}/>
              </li>
            )
          })
          :
          null
          }
        </ul>
        <div className={styles.buyButton}><button onClick={() => buyAll()}>BUY ALL</button></div>
        <div>
          <span className={styles.totalPrice}>
            Total Price: <span className={styles.totalPriceNumber}>
              {total.toFixed(2)}$
            </span>
          </span>
        </div>
        <div className={isModal ? styles.modalWindowActive : styles.modalWindow}>
          <div className={styles.closeIcon} onClick={() => setIsModal(!isModal)}>&#10007;</div>
          <span className={styles.text}>Your order has been accepted for execution</span>
        </div>
      </div>
    </>
  );
};

export default Cart;