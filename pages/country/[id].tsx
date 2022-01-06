import React, { useState } from 'react';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { CategoryDatas, CategoryData } from '../../types/category';
import styles from '../../styles/Country.module.scss';
import Head from 'next/head';
import Comparison from '../../components/ui/icons/Comparison';

const Country = ({data}: CategoryDatas): JSX.Element => {
  const router = useRouter();
  const [quantity, setQuantity] = useState<number>(1);
  const currencies = Object.keys(data[0]?.currencies);
  const languages = Object.keys(data[0]?.languages);
  const linkRegion = `${process.env.NEXT_PUBLIC_API_URL}/category/${data[0]?.region?.toLowerCase()}`;
  
  const incCounter = () => {
    setQuantity(prev => prev + 1);
  }

  const decCounter = () => {
    if (quantity === 1) {
      return
    } else {
      setQuantity(prev => prev - 1);
    }
  }

  const addToCart = (flag: string) => {
    const oldLocalStorage = localStorage.getItem(flag);
    let oldCart: CategoryData[] | [] = [];
    let newCartStorage:string = ''; 
    if (oldLocalStorage?.length) {
      oldCart = JSON.parse(oldLocalStorage);
      let currentCartItem = oldCart.filter(el => el.name.common === data[0]?.name.common);
      if (currentCartItem.length >= 1) {
        let upCurrentItem = currentCartItem.map(el => ({...el, count: quantity, 
          totalPrice: +Math.abs(((el.area / el.population) * 10000)).toFixed(2) * quantity
        }));
        let newCart: CategoryData[] | [] = 
        [...oldCart.filter(el => el.name.common !== data[0]?.name.common), 
        ...upCurrentItem];
        localStorage.removeItem(flag);
        localStorage.setItem(flag, JSON.stringify( newCart ));   
        return
      } else {
        newCartStorage = JSON.stringify([...oldCart, {...data[0], count: quantity,
          totalPrice: +Math.abs(((data[0].area / data[0].population) * 10000)).toFixed(2) * quantity
        }]);
      }    
    } else {
      newCartStorage = JSON.stringify([{...data[0], count: quantity, 
        totalPrice: +Math.abs(((data[0].area / data[0].population) * 10000)).toFixed(2) * quantity
      }]);
    }
    localStorage.setItem(flag, newCartStorage);
  }

  return (
    <>
      <Head>
        <title>
          Buy {data[0]?.name?.common + ' ' + '(' + data[0]?.name?.official + ')' 
          + ' ' + data[0]?.region + ' - ' + Math.abs(((data[0]?.area / data[0]?.population) * 10000)).toFixed(2) + '$'}
        </title>
        <meta 
          name="description" 
          content={`You can buy ${data[0]?.name?.common} at a low cost. We offer you free shipping and a 7-day warranty`} />
      </Head>
      <div className={styles.wrapper}>
        <div className={styles.top}>
          <div className={styles.img}>
            <Image src={data[0]?.flags?.svg ? data[0]?.flags.svg : data[0]?.flags.png}
              width='500px'
              height='250px'
              alt={data[0]?.name?.common}
              />
              <div onClick={() => addToCart('comparison')}>
                <Comparison width='30px' height='30px' color='#e86a23'/>
              </div>
          </div>
          <div>
            <h1>{data[0]?.name?.common}</h1>
            <span>{data[0]?.name?.official}</span>
            <div className={styles.href}>
              Region: <a className={styles.a} onClick={() => router.push(linkRegion)}>
                {data[0]?.region}
              </a>
            </div>
            <div className={styles.price}>
              {Math.abs(((data[0]?.area / data[0]?.population) * 10000)).toFixed(2)}$
            </div>
            <div className={styles.counter}>
              <div className={styles.dec} onClick={() => decCounter()}> 
                &#8722;
              </div>
              <input type="text" value={quantity} disabled/>
              <div className={styles.inc} onClick={() => incCounter()}>
                &#43;
              </div>
            </div>
            <div className={styles.button} onClick={() => addToCart('cart')}>Add to Cart</div>
          </div>
        </div>
        <h2>Specifications</h2>
        <table className={styles.table}>
          <tbody>
            <tr>
              <th>Characteristic</th>
              <th></th>
            </tr>  
            <tr>
              <td>Currencies:</td>
              <td>
                <ul>{currencies.map(currenc => (
                  <li key={currenc}>
                    {data[0]?.currencies[currenc].name + ' ' + data[0]?.currencies[currenc].symbol}
                  </li>
                  ))}
                </ul>
              </td>
            </tr>
            <tr>
              <td>Capital:</td>
              <td> {data[0]?.capital ? data[0]?.capital[0] : '-'}</td>
            </tr>
            <tr>
              <td>Subregion:</td>
              <td>{data[0]?.subregion}</td>
            </tr>
            <tr>
              <td>Coordinates(lat, lng):</td>
              <td>{data[0]?.latlng[0] + ', ' + data[0]?.latlng[1]}</td>
            </tr>
            <tr>
              <td>Area:</td>
              <td>{data[0]?.area} km<sup>2</sup></td>
            </tr>
            <tr>
              <td>Population:</td>
              <td>{data[0]?.population}</td>
            </tr>
            <tr>
              <td>Timezones:</td>
              <td> {data[0]?.timezones[0]}</td>
            </tr>
            <tr>
              <td>Languages:</td>
              <td>
                <ul>{languages.map(lang => (
                  <li key={lang}>{data[0]?.languages[lang]}</li>
                  ))}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Country;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id }: any = context.params;
  const res = await fetch(`https://restcountries.com/v3.1/name/${id}?fullText=true`);
  const data = await res.json();
  
  if (!data) {
    return {
      redirect: {
        destination: '/404',
        permanent: false,
      },
    }
  }

  if (data.status === 404) {
    return {
      redirect: {
        destination: '/404',
        permanent: false,
      },
    }
  }

  return {
    props: {
      data,
    }
  }
}


