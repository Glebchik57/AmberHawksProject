import NewsCard from '../../../UI/newsCard/NewsCard';
import React from 'react';
import styles from './News.module.css'
import { NEWS } from '../../../../mock/team/const';
import Link from 'next/link';

export default function News() {
  return (
    <div className={styles.news}>
      <div className={styles.news__header}>
        <Link className={styles.news__title} href='news'>Актуальное</Link>
        <Link className={styles.news__button} href='news'>Все новости &#8599;</Link>
      </div>
      <div className={styles.news__list}>
        {NEWS.map((item) => (
          <NewsCard
            key={item.id}
            item={item}
          />
        ))}

      </div>
    </div >
  );
}
