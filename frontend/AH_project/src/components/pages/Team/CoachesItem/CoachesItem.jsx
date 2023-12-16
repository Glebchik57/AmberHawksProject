import styles from './CoachesItem.module.css'
import Image from 'next/image';

function CoachesItem({ coach }) {
    return (
        <li className={styles.item}>
            <Image
                src={coach.image}
                alt='coach'
                width={360}
                height={480}
            />
            <h3 className={styles.name}>{coach.name}</h3>
            <p className={styles.position}>{coach.position}</p>
        </li>
    )
}

export default CoachesItem