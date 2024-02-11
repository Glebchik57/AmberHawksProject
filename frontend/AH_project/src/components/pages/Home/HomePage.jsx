import React from 'react';
import styles from './Home.module.css';
import Button from './../../UI/button/Button.jsx';

export default function Home() {
  return (
    <>
      <div className={styles.main}>
        <span className={styles.main__title}>Amber Hawks</span>
        <span className={styles.main__subtext}>Калининградский клуб американского футбола </span>
      </div>
      <div className={styles.main__btn}>
        <Button name='Записаться на тренироку' />
      </div>

    </>
  );
}
