import styles from './NewsItem.module.css'
import Image from 'next/image';

function NewsItem({ item }) {
    return (
        <li className={styles.item}>
            <Image className={styles.img}
                width={1200}
                height={440}
                src={item.img}
                alt='photo'
            />
            <span>{item.data}</span>
            <h2 className={styles.title}>{item.title}</h2>
            <p className={styles.text}>
                {item.text}
            </p>
        </li>
    )
}

export default NewsItem