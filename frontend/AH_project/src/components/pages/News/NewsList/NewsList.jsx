import styles from './NewsList.module.css'
import NewsItem from "../NewsItem/NewsItem"
import { getEvents } from '../../../../api/api';
// import { NEWS } from '../../../../mock/team/const'


async function NewsList() {
    const events = await getEvents();
    console.log(events)
    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}>Новости и события</h2>
            <div className={styles.toggles}>
                <button className={`${styles.toggle} ${styles.toggle_active}`}>Новости</button>
                <button className={styles.toggle}>События</button>
            </div>
            <ul className={styles.list}>
                {events.map((event) => (
                    <NewsItem
                        key={event.title}
                        events={event}
                    />
                ))}
            </ul>
        </div>
    )
}

export default NewsList