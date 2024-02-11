import NewsCard from '../../../UI/newsCard/NewsCard';
import React from 'react';
import styles from './News.module.css'
// import { NEWS } from '../../../../mock/team/const';
import Link from 'next/link';
import { getNews } from '../../../../api/api'

async function News() {
  const news = await getNews();

  const numberOfCards = 3;

  return (
    <div className={styles.news}>
      <div className={styles.news__header}>
        <Link className={styles.news__title} href='news'>Актуальное</Link>
        <Link className={styles.news__button} href='news'>Все новости &#8599;</Link>
      </div>
      <div className={styles.news__list}>
        {news.length ? news.slice(0, numberOfCards).map((item) => (
          <NewsCard
            key={item.title}
            item={item}
          />
        )) : <div className="none-info">Пока нет новостей!</div>}

      </div>
    </div >
  );
}

export default News