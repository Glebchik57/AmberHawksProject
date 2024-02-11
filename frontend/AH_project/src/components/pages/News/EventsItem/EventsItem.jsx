import styles from '../NewsItem/NewsItem.module.css'
import Image from 'next/image';

function NewsItem({ events }) {
    return (
        <li className={styles.item}>
            {(events.image) ?
                <Image className={styles.img}
                    width={780}
                    height={440}
                    src={events.image}
                    alt='photo'
                />
                :
                <Image className={styles.img}
                    width={780}
                    height={440}
                    src='/amber.jpg'
                    alt='photo'
                />
            }
            <span>{events.date}</span>
            <h2 className={styles.title}>{events.title}</h2>
            <p className={styles.text}>
                {events.text}
            </p>
        </li>
    )
}

export default NewsItem