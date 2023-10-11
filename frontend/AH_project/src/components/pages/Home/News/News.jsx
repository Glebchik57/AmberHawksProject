import NewsCard from '@/components/UI/newsCard/NewsCard';
import React from 'react';
import styles from './News.module.css'
import { NEWS } from '@/mock/team/const';

export default function News() {
  return (
    <div className={styles.news}>
      <div className={styles.news__header}>
        <div className={styles.news__title}>Новости</div>
        <div className={styles.news__button}>Все новости</div>
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
