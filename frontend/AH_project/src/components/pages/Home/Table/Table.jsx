import Row from "./Row";
import styles from './Table.module.css'

export default function Table() {
    const rows = [
        {
            day: 'понедельник',
            time: '20:00',
            description: 'стадион Сельма'
        },
        {
            day: 'вторник',
            time: '20:00',
            description: 'спортивный клуб X-STREAM'
        },
        {
            day: 'четверг',
            time: '20:00',
            description: 'спортивный клуб X-STREAM'
        },
        {
            day: 'пятница',
            time: '20:00',
            description: 'стадион Сельма'
        },
    ];

    return (
        <div className={styles.table}>
            <div className={styles.table__header}>
                <h2 className={styles.table__title}>Расписание тренировок</h2>
            </div>
            <ul className={styles.table__rows}>
                {rows.map((row) => {
                    return <Row key={row.day} {...row} />

                })}
            </ul>
        </div >
    );
}