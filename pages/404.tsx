import { NextPage } from 'next';
import React from 'react';
import styles from '../styles/Error404.module.scss';

const error404:NextPage = () => {
  return (
    <div>
      <h1 className={styles.title}>404 Error</h1>
    </div>
  );
};

export default error404;