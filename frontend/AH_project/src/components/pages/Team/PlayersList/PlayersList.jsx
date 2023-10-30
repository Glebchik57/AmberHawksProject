import styles from './PlayersList.module.css'
import { playersList } from "@/mock/team/mock"
import PlayersItem from "../PlayersItem/PlayersItem"

function PlayersList() {
    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}>Игроки</h2>
            <div className={styles.toggles}>
                <button className={`${styles.toggle} ${styles.toggle_active}`}>Нападение</button>
                <button className={styles.toggle}>Защита</button>
            </div>
            <ul className={styles.list}>
                {playersList.map((player) => (
                    <PlayersItem
                        key={player.id}
                        player={player}
                    />
                ))}
            </ul>
        </div>
    )
}

export default PlayersList