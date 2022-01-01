import React from 'react';
import Image from 'next/image';
import { CategoryItemProps } from '../types/category';
import styles from '../styles/CategoryItem.module.scss'
import Link from 'next/link';

const CategoryList = ({item}:CategoryItemProps):JSX.Element => {
  
  let price = '0';
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
          <Link href={`/country/${item.name.common.toLowerCase()}`}><a><span>{item.name.common.length < 40 ? item.name.common : item.name.common.substring(0, 40) + '...'}</span></a></Link>
        </div>
        <div className={styles.character}>
          <div className={styles.price}>
            {price + '$'}
          </div>
          <div className={styles.count}>
            <span>Population: {item.population}</span>
            <span>Area: {item.area} km<sup>2</sup></span>
          </div>
        </div>
        
      </div>

    </div>
  );
};

export default CategoryList;