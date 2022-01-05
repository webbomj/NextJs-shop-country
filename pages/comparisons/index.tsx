import React, { useEffect, useState } from 'react';
import { CategoryData } from '../../types/category';
import Image from 'next/image';
import styles from '../../styles/Comparisons.module.scss'
import { useRouter } from 'next/router';
import Trash from '../../components/ui/icons/Trash';
import Head from 'next/head';

const Comparison = () => {
  // const [numberOfGood, setNumberOfGood] = useState<Number>(0);
  const router = useRouter()
  const [numberOfGood, setNumberOfGood ] = useState(0);
  const [allComparisonGoods, setAllComparisonGoods] = useState<CategoryData[]>([])
  
  useEffect(() => {
    if (localStorage.getItem('comparison') !== null) {
      setAllComparisonGoods(JSON.parse(localStorage.getItem('comparison')))
    }
  }, [])

  let favorites: number = allComparisonGoods ? allComparisonGoods.length : 0
  
  const deleteFavorite = (index: number) => {
    let filterFavorite = allComparisonGoods.filter((el, i) => i !== index)
    setAllComparisonGoods([...filterFavorite])
    localStorage.setItem('comparison', JSON.stringify(filterFavorite))
  }

  const swapLeftTable = () => {
    if (numberOfGood === 0) {
      return
    }
    setNumberOfGood(prev => prev - 1)
  }
  const swapRightTable = () => {
    if (numberOfGood >= allComparisonGoods.length - 3) {
      return
    }
    setNumberOfGood(prev => prev + 1)
  }

  return (
    <>
    <Head>
      <title>Comparison table of countries by parameters</title>
      <meta name="description" content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quasi ad alias repellat molestias id quia eius. Unde, explicabo corporis? Voluptates repellendus minus tempore eius in totam, rem iure temporibus." />
    </Head>
    {favorites > 0
      ?
    <>
    <h1 className={styles.title} >Comparison Table</h1>
    <div className={styles.arrowRelative}>
      <div className={styles.arrowLeft} onClick={() => swapLeftTable()}></div>
      <div className={styles.arrowRight} onClick={() => swapRightTable()}></div>
      <table className={styles.table}>
        <tbody>
          <tr className={styles.tr}>
            <td className={styles.td}>Characters / goods</td>
            <td className={styles.td}>
              {allComparisonGoods && favorites > 0 ? 
              <>
                <Image className={styles.img}
                  src={
                    allComparisonGoods[numberOfGood]?.flags?.svg 
                    ? 
                    allComparisonGoods[numberOfGood]?.flags.svg 
                    : 
                    allComparisonGoods[numberOfGood]?.flags.png
                  }
                  onClick={() => router.push(`${process.env.NEXT_PUBLIC_API_URL}country/${allComparisonGoods[numberOfGood]?.name.common.toLowerCase()}`)}
                  width='300px'
                  height='150px'
                  alt={allComparisonGoods[numberOfGood]?.name?.common}
                  /> 
                  <div onClick={() => deleteFavorite(numberOfGood)}><Trash width='30px' height='30px' color='#e86a23'/></div>
              </>
                : null}
            </td>
            {favorites >= 2 ? <td className={styles.td}>
              {allComparisonGoods?.length  >= 2 && favorites > 0 ? 
             <>
                <Image className={styles.img}
                src={
                  allComparisonGoods[numberOfGood + 1]?.flags?.svg 
                  ? 
                  allComparisonGoods[numberOfGood + 1]?.flags.svg 
                  : 
                  allComparisonGoods[numberOfGood + 1]?.flags.png
                }
                onClick={() => router.push(`${process.env.NEXT_PUBLIC_API_URL}country/${allComparisonGoods[numberOfGood + 1]?.name.common.toLowerCase()}`)}
                width='300px'
                height='150px'
                alt={allComparisonGoods[numberOfGood + 1]?.name?.common}
                />
                <div onClick={() => deleteFavorite(numberOfGood + 1)}><Trash width='30px' height='30px' color='#e86a23'/></div>
              </>
                : null}</td> : null}
            {favorites >= 3 ? <td className={styles.td}>
              {allComparisonGoods?.length >= 3 && favorites > 0 ? 
              <>
              <Image className={styles.img}
                src={
                  allComparisonGoods[numberOfGood + 2]?.flags?.svg 
                  ? 
                  allComparisonGoods[numberOfGood + 2]?.flags.svg 
                  : 
                  allComparisonGoods[numberOfGood + 2]?.flags.png
                }
                onClick={() => router.push(`${process.env.NEXT_PUBLIC_API_URL}country/${allComparisonGoods[numberOfGood + 2]?.name.common.toLowerCase()}`)}
                width='300px'
                height='150px'
                alt={allComparisonGoods[numberOfGood + 2]?.name?.common}
                /> 
                <div onClick={() => deleteFavorite(numberOfGood + 2)}><Trash width='30px' height='30px' color='#e86a23'/></div>
              </>
                : null}
            </td> : null}
          </tr>
          <tr className={styles.tr}>
            <td className={styles.td}>Name:</td>
            <td className={styles.td}>
              <a className={styles.a} onClick={() => router.push(`${process.env.NEXT_PUBLIC_API_URL}country/${allComparisonGoods ? allComparisonGoods[numberOfGood]?.name.common.toLowerCase() : null}`)}>
                {allComparisonGoods ? allComparisonGoods[numberOfGood]?.name.common : null}
              </a>
            </td>
            {favorites >= 2 ? 
            <td className={styles.td}>
              <a className={styles.a} onClick={() => router.push(`${process.env.NEXT_PUBLIC_API_URL}country/${allComparisonGoods ? allComparisonGoods[numberOfGood + 1]?.name.common.toLowerCase() : null}`)}>
                {allComparisonGoods ? allComparisonGoods[numberOfGood + 1]?.name.common : null}
              </a>
            </td>
            : null}
            {favorites >= 3 ? 
            <td className={styles.td}>
              <a className={styles.a} onClick={() => router.push(`${process.env.NEXT_PUBLIC_API_URL}country/${allComparisonGoods ? allComparisonGoods[numberOfGood + 2]?.name.common.toLowerCase() : null}`)}>
                {allComparisonGoods ? allComparisonGoods[numberOfGood + 2]?.name.common : null}
              </a>
            </td>
            : null}
          </tr>
          <tr className={styles.tr}>
            <td className={styles.td}>Region:</td>
            <td className={styles.td}>{allComparisonGoods ? allComparisonGoods[numberOfGood]?.region : null}</td>
            {favorites >= 2 ? <td className={styles.td}>{allComparisonGoods ? allComparisonGoods[numberOfGood + 1]?.region : null}</td>: null}
            {favorites >= 3 ? <td className={styles.td}>{allComparisonGoods ? allComparisonGoods[numberOfGood + 2]?.region : null}</td>: null}
          </tr>
          <tr className={styles.tr}>
            <td className={styles.td}>Capital:</td>
            <td className={styles.td}>{allComparisonGoods ? allComparisonGoods[numberOfGood]?.capital : null}</td>
            {favorites >= 2 ? <td className={styles.td}>{allComparisonGoods ? allComparisonGoods[numberOfGood + 1]?.capital : null}</td>: null}
            {favorites >= 3 ? <td className={styles.td}>{allComparisonGoods ? allComparisonGoods[numberOfGood + 2]?.capital : null}</td>: null}
          </tr>
          <tr className={styles.tr}>
            <td className={styles.td}>SubRegion:</td>
            <td className={styles.td}>{allComparisonGoods ? allComparisonGoods[numberOfGood]?.subregion : null}</td>
            {favorites >= 2 ? <td className={styles.td}>{allComparisonGoods ? allComparisonGoods[numberOfGood + 1]?.subregion : null}</td>: null}
            {favorites >= 3 ? <td className={styles.td}>{allComparisonGoods ? allComparisonGoods[numberOfGood + 2]?.subregion : null}</td>: null}
          </tr>
          <tr className={styles.tr}>
            <td className={styles.td}>Coordinates(lat, lng):</td>
            <td className={styles.td}>{allComparisonGoods ? String(allComparisonGoods[numberOfGood]?.latlng[0]) + ', ' + String(allComparisonGoods[numberOfGood]?.latlng[1])  : null}</td>
            {favorites >= 2 ? <td className={styles.td}>{allComparisonGoods ? String(allComparisonGoods[numberOfGood + 1]?.latlng[0]) + ', ' + String(allComparisonGoods[numberOfGood + 1]?.latlng[1]): null}</td>: null}
            {favorites >= 3 ? <td className={styles.td}>{allComparisonGoods ? String(allComparisonGoods[numberOfGood + 2]?.latlng[0]) + ', ' + String(allComparisonGoods[numberOfGood + 2]?.latlng[1]): null}</td>: null}
          </tr>
          <tr className={styles.tr}>
            <td className={styles.td}>Area:</td>
            <td className={styles.td}>{allComparisonGoods ? allComparisonGoods[numberOfGood]?.area : null}</td>
            {favorites >= 2 ? <td className={styles.td}>{allComparisonGoods ? allComparisonGoods[numberOfGood + 1]?.area : null}</td>: null}
            {favorites >= 3 ? <td className={styles.td}>{allComparisonGoods ? allComparisonGoods[numberOfGood + 2]?.area : null}</td>: null}
          </tr>
          <tr className={styles.tr}>
            <td className={styles.td}>Population:</td>
            <td className={styles.td}>{allComparisonGoods ? allComparisonGoods[numberOfGood]?.population : null}</td>
            {favorites >= 2 ? <td className={styles.td}>{allComparisonGoods ? allComparisonGoods[numberOfGood + 1]?.population : null}</td>: null}
            {favorites >= 3 ? <td className={styles.td}>{allComparisonGoods ? allComparisonGoods[numberOfGood + 2]?.population : null}</td>: null}
          </tr>
          <tr className={styles.tr}>
            <td className={styles.td}>Timezones:</td>
            <td className={styles.td}>{allComparisonGoods ? allComparisonGoods[numberOfGood]?.timezones[0] : null}</td>
            {favorites >= 2 ? <td className={styles.td}>{allComparisonGoods ? allComparisonGoods[numberOfGood + 1]?.timezones[0] : null}</td>: null}
            {favorites >= 3 ? <td className={styles.td}>{allComparisonGoods ? allComparisonGoods[numberOfGood + 2]?.timezones[0] : null}</td>: null}
          </tr>
        </tbody>
      </table>
      
    </div>
  </>
: <span className={styles.span}>Nothing in comparison`s table</span>}
  </>

  );
};

export default Comparison;