import styles from './PlayersList.module.css'
import PlayersItem from "../PlayersItem/PlayersItem"
import { getPlayers } from '../../../../api/api'

async function PlayersList() {
    const players = await getPlayers();
    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}>Игроки</h2>
            <div className={styles.toggles}>
                <button className={`${styles.toggle} ${styles.toggle_active}`}>Нападение</button>
                <button className={styles.toggle}>Защита</button>
            </div>
            <ul className={styles.list}>
                {players.map((player) => (
                    <PlayersItem
                        key={player.first_name}
                        player={player}
                    />
                ))}
            </ul>
        </div>
    )
}

export default PlayersList