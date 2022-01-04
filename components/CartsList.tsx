import React, { useEffect, useState } from 'react';
import { CategoryData, CategoryItemProps } from '../types/category';
import Image from 'next/image';
import styles from '../styles/CartItem.module.scss';
import { useRouter } from 'next/router';

const CartsList = ({item, deleteLocal, changeFlag}: CategoryItemProps) => {
  const [inputValue, setInputValue] = useState(item.count);
  const [price, setPrice] = useState(+Math.abs(((item.area / item.population) * 10000)).toFixed(2));
  let fullPrice = price * inputValue;
  const router = useRouter();

  useEffect(() => {
    fullPrice = price * inputValue
  }, [price, inputValue])

  const updateLocalStorage = (number: number, value: string) => {
    let allGoods: CategoryData[] = JSON.parse(localStorage.getItem('cart'))
    let thisGood: CategoryData[] = allGoods.filter(el => el.name.common === item.name.common)
    thisGood[0].count = number;
    if (value === 'dec') {
      thisGood[0].totalPrice = price * (inputValue - 1);
    } else {
      thisGood[0].totalPrice = price * (inputValue + 1);
    }
    
    localStorage.setItem('cart', JSON.stringify([...allGoods.filter(el => el.name.common !== item.name.common), ...thisGood]))
  }

  const incCount = () => {
    setInputValue(prev => prev + 1);
    updateLocalStorage(inputValue + 1, 'inc');
    changeFlag();
  }

  const decCount = () => {
    if (inputValue === 1) {
      return
    }
    setInputValue(prev => prev - 1);
    updateLocalStorage(inputValue - 1, 'dec');
    changeFlag();
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.flag} onClick={() => router.push(`${process.env.NEXT_PUBLIC_API_URL}country/${item.name.common.toLowerCase()}`)}>
        <Image src={item.flags.svg ? item.flags.svg : item.flags.png} width='150px' height='75px' alt={item.name.common}/>
      </div>
      <div className={styles.info}>
        <span className={styles.title} onClick={() => router.push(`${process.env.NEXT_PUBLIC_API_URL}country/${item.name.common.toLowerCase()}`)}>{item.name.common}</span>
        <span className={styles.details}>{`Population: ${item.population}`}</span>
        <span className={styles.details}>{`Area: ${item.area} km`}<sup>2</sup></span>
      </div>
      <div className={styles.counter}>
        <div className={styles.counterButton} onClick={() => decCount()}>&#8722;</div>
        <input className={styles.input} value={inputValue} disabled/>
        <div className={styles.counterButton} onClick={() => incCount()}>&#43;</div>
      </div>
      <div className={styles.price}>{fullPrice.toFixed(2)}$</div>
      <div><button className={styles.removeButton} onClick={() => deleteLocal(item.name.common)}>Remove</button></div>
      
    </div>
  );
};

export default CartsList;