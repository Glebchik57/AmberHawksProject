import styles from './Row.module.css'

export default function Row({ day, time, description }) {
    return (
        <li className={styles.row}>
            <div className={styles.row__day}>{day}</div>
            <div className={styles.row__time}>{time}</div>
            <div className={styles.row__description}>{description}</div>
        </li >
    );
}