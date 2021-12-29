import { GetServerSideProps} from 'next';
import React, { ReactNode, useState} from 'react';
import CategoryList from '../../components/CategoryList';
import { CategoryData, CategoryDatas } from '../../types/category';
import styles from '../../styles/Category.module.scss';
import { useRouter } from 'next/router';



const Category = ({data}: CategoryDatas) => {
  const router = useRouter();
  console.log(router)
  return (
    <>
    <h1 className={styles.title}>{router.query.id && `${router.query.id[0].toUpperCase()}${router.query.id.slice(1)}`}</h1>
    <div className={styles.wrapper}>
      {data.map((el: CategoryData): ReactNode => (
        <CategoryList key={el.name.common} item={el}/>
      ))}
    </div>
    </>
  );
};

export default Category;


export const getServerSideProps: GetServerSideProps = async (context) => {
  const {id} = context.params
  const res = await fetch(`https://restcountries.com/v3.1/region/${id}`);
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
