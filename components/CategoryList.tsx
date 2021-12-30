import React from 'react';
import Image from 'next/image';
import { CategoryItemProps } from '../types/category';
import styles from '../styles/CategoryItem.module.scss'
import Link from 'next/link';

const CategoryList = ({item}:CategoryItemProps) => {
  
  let price = 0;
  if (item?.area && item?.population) {
    price = Math.abs(((item.area / item.population) * 10000)).toFixed(2)
  }
  return (
    <div className={styles.cart}>
      <div className={styles.img}>
        <Image src={item.flags.svg ? item.flags.svg : item.flags.png} alt={item.name.common} width={200} height={100}/>
      </div>
      <div className={styles.info}>
        <div className={styles.title}>
          <Link href={`/country/${item.name.common.toLowerCase()}`}><a><span>{item.name.common}</span></a></Link>
        </div>
        <div className={styles.price}>
          {price + '$'}
        </div>
        <div className={styles.count}>
          <span>Quantity in stock: </span>{item.population}
        </div>
      </div>

    </div>
  );
};

export default CategoryList;