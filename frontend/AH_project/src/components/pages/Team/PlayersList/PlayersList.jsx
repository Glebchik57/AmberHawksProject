import styles from './PlayersList.module.css'
import { playersList } from "@/mock/team/mock"
import PlayersItem from "../PlayersItem/PlayersItem"

function PlayersList() {
    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}>Команда</h2>
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