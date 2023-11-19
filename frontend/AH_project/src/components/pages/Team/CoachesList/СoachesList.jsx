import styles from './CoachesList.module.css'
import { coachesList } from "../../../../mock/team/mock"
import CoachesItem from "../CoachesItem/CoachesItem"

function CoachesList() {
    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}>Тренерский штаб</h2>
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

export default CoachesList