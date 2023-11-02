import styles from './NewsList.module.css'
import NewsItem from "../NewsItem/NewsItem"
import { NEWS } from '@/mock/team/const'

function NewsList() {
    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}>Новости и события</h2>
            <div className={styles.toggles}>
                <button className={`${styles.toggle} ${styles.toggle_active}`}>Новости</button>
                <button className={styles.toggle}>События</button>
            </div>
            <ul className={styles.list}>
                {console.log(NEWS)}
                {NEWS.map((item) => (
                    <NewsItem
                        key={item.id}
                        item={item}
                    />
                ))}
            </ul>
        </div>
    )
}

export default NewsList