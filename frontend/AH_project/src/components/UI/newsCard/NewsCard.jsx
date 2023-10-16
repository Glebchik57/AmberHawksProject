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
            fill
            sizes='100%'
            src={item.img}
            alt='photo'
          />
        </div>
        <h1 className={styles.title}>{item.title}</h1>
        <p className={styles.text}>
          {item.text.length > 100 ? `${item.text.slice(0, 100)}...` : item.text}
        </p>
      </div>
    </>
  );
}
