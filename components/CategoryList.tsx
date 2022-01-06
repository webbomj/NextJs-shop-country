import React from 'react';
import Image from 'next/image';
import { CategoryItemProps } from '../types/category';
import styles from '../styles/CategoryItem.module.scss'
import Link from 'next/link';
import Comparison from './ui/icons/Comparison';
import { CategoryData } from '../types/category';

const CategoryList = ({item}:CategoryItemProps):JSX.Element => {
  let price = '0';

  if (item?.area && item?.population) {
    price = Math.abs(((item.area / item.population) * 10000)).toFixed(2);
  }

  const addToCart = (flag: string) => {
    const oldLocalStorage = localStorage.getItem(flag);
    let oldCart: CategoryData[] | [] = [];
    let newCartStorage: string = '';
    if (oldLocalStorage?.length) {
      oldCart = JSON.parse(oldLocalStorage);
      let currentCartItem = oldCart.filter(el => el.name.common === item?.name.common);
      if (currentCartItem.length >= 1) {
        let upCurrentItem = currentCartItem.map(el => ({...el, count: 1}));
        let newCart = 
        [...oldCart.filter(el => el.name.common !== item?.name.common), 
        ...upCurrentItem];
        localStorage.removeItem(flag);
        localStorage.setItem(flag, JSON.stringify( newCart ));   
        return
      } else {
        newCartStorage = JSON.stringify([...oldCart, {...item, count: 1}]);
      }    
    } else {
      newCartStorage = JSON.stringify([{...item, count: 1}]);
    }
    localStorage.setItem(flag, newCartStorage);
  }

  return (
    <div className={styles.cart}>
      <div className={styles.img}>
        <Link href={`/country/${item.name.common.toLowerCase()}`}>
          <a>
            <Image src={item.flags.svg ? item.flags.svg : item.flags.png} alt={item.name.common} width={200} height={100}/>
          </a>
        </Link>
        <div className={styles.comparison} onClick={() => addToCart('comparison')}>
          <Comparison width='30px' height='30px' color='#e86a23'/>
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.title}>
          <Link href={`/country/${item.name.common.toLowerCase()}`}>
            <a className={styles.a}>
              <span>
                {item.name.common.length < 40 ? item.name.common : item.name.common.substring(0, 40) + '...'}
              </span>
            </a>
          </Link>
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