import React, { useState } from 'react';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { CategoryDatas } from '../../types/category';
import styles from '../../styles/Country.module.scss';
import Link from 'next/link';

const Country = ({data}: CategoryDatas) => {
  const router = useRouter();
  const [quantity, setQuantity] = useState(1)
  
  console.log(data)
  const currencies = Object.keys(data[0].currencies);
  const languages = Object.keys(data[0].languages);
  const linkRegion = `${process.env.NEXT_PUBLIC_API_URL}/category/${data[0].region?.toLowerCase()}`
  console.log(linkRegion)
  return (
    <>
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <div>
          <Image src={data[0].flags?.svg ? data[0].flags.svg : data[0].flags.png} width={500} height={250} alt={data[0].name?.common}/>
        </div>
        <div>
          <h1>{data[0].name?.common}</h1>
          <span>{data[0].name?.official}</span>
          <div className={styles.href}>Region: <a onClick={() => router.push(linkRegion)}>{data[0].region}</a></div>
          <div className={styles.price}>{Math.abs(((data[0].area / data[0].population) * 10000)).toFixed(2)}$</div>
          <div className={styles.counter}>
            <div> 
              &#8722;
            </div>
            <input type="text" value={quantity} />
            <div>
              &#43;
            </div>
          </div>
          <div className={styles.button}>Add to Cart</div>
        </div>
      </div>

      <div>Independent: {data[0].independent ? 'Yes' : 'No'}</div>
      Currencies: <ul>{currencies.map(currenc => (
        <li key={currenc}>{data[0].currencies[currenc].name + ' ' + data[0].currencies[currenc].symbol}</li>
      ))}
      </ul>
      <div>Capital: {data[0].capital[0]}</div>
      
      <div>Subregion: {data[0].subregion}</div>
      Languages: <ul>{languages.map(lang => (
        <li key={lang}>{data[0].languages[lang]}</li>
      ))}
      </ul>
      <div>Lat, Lng: {data[0].latlng[0] + ', ' + data[0].latlng[1]}</div>
      <div>Area: {data[0].area} km<sup>2</sup></div>
      <div>Population: {data[0].population}</div>
      <div>Timezones: {data[0].timezones[0]}</div>
    </div>
    </>
  );
};

export default Country;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const {id} = context.params
  console.log(process.env.LOCALHOST)
  const res = await fetch(`https://restcountries.com/v3.1/name/${id}`);
  const data = await res.json();
  
  if (!data) {
    return {
      redirect: {
        destination: '/',
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
