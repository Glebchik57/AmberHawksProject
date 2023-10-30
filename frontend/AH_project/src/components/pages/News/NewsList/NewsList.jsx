import styles from './NewsList.module.css'
import { coachesList } from "@/mock/team/mock"
import CoachesItem from "../CoachesItem/CoachesItem"

function NewsList() {
    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}>Новости и события</h2>
            <div className={styles.toggles}>
                <button className={`${styles.toggle} ${styles.toggle_active}`}>Новости</button>
                <button className={styles.toggle}>События</button>
            </div>
            <ul className={styles.list}>
                {coachesList.map((coach) => (
                    <CoachesItem
                        key={coach.id}
                        coach={coach}
                    />
                ))}
            </ul>
        </div>
    )
}

export default NewsList