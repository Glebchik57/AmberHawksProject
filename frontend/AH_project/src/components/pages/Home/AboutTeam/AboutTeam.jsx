import React from 'react';
import styles from './AboutTeam.module.css'
import Link from 'next/link';

export default function AboutTeam() {
  return (
    <div className={styles.about}>
      <div className={styles.about__header}>
        <Link className={styles.about__title} href='team'>О Команде</Link>
        <Link className={styles.news__button} href='news'>Подробнее про команду &#8599;</Link>
      </div>

      <div className={styles.about__content}>
        {/* <div className={styles.about__video}>
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/Ug9B2ossvJQ?si=CCiZD-18jq7pqDH2" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div> */}
        <div className={styles.about__text}>
          Региональная федерация американского футбола - это организация, которая занимается развитием и организацией американского футбола на региональном уровне. Она имеет свои собственные правила и нормы, согласованные с национальной федерацией.
        </div>
      </div>
    </div>
  );
}
