import styles from './NewsList.module.css';
import NewsItem from "../NewsItem/NewsItem";
import EventsItem from "../EventsItem/EventsItem";
import { getEvents } from '../../../../api/api';
import { NEWS } from '../../../../mock/team/const';
// import { useState } from 'react';


async function NewsList() {
    const events = await getEvents();
    // const [isActive, setActive] = useState(true);

    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}>Новости и события</h2>
            <div className={styles.toggles}>
                <button className={`${styles.toggle} ${styles.toggle_active}`}>Новости</button>
                <button className={styles.toggle}>События</button>
            </div>
            <ul className={styles.list}>
                {NEWS.map((event) => (
                    <NewsItem
                        key={event.title}
                        events={event}
                    />
                ))}
                {events.map((event) => (
                    <EventsItem
                        key={event.title}
                        events={event}
                    />
                ))}
            </ul>
        </div>
    )
}

export default NewsList