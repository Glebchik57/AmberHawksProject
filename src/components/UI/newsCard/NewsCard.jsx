import React from 'react';
import styles from './News.module.css';
import Image from 'next/image';



export default function NewsCard({ item }) {
  return (
    <>
      <div className={styles.card}>
        <span className={styles.data}>{item.data}</span>
        <div className={styles.img}>
          <Image 
          width={290}
          height={290}
          src={item.img}
          alt='photo'
          />
        </div>
        <h1 className={styles.title}>{item.title}</h1>
        <p className={styles.text}>
          {item.text}
        </p>
      </div>
    </>
  );
}
