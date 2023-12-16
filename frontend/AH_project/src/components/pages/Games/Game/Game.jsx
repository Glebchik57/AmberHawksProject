import styles from './Game.module.css'

function Game({ item }) {

    return (
        <li className={styles.item}>
            <div className={styles.vs}>
                <span className={styles.name}>Янтарные ястребы</span>
                <span className={styles.points}>{item.points}</span>
                :
                <span className={styles.points}>{item.points_}</span>
                <span className={styles.name}>{item.team}</span>
            </div>
            <div className={styles.date}>{item.date}</div>
            <div className={styles.place}>{item.place}</div>
        </li>
    )
}

export default Game