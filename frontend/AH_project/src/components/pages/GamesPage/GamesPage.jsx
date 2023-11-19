import { GAMES } from '../../../mock/team/const'
import styles from './Games.module.css'
import Game from './Game/Game'
// import CoachesItem from '../Team/CoachesItem/CoachesItem'
// import { coachesList } from "@/mock/team/mock"

function GamesPage() {

    return (
        <div className={styles.wrapper}>
            <div>
                <h1 className={styles.title}>Матчи</h1>
                <ul className={styles.list}>
                    {GAMES.map((item) => (
                        <Game
                            key={item.id}
                            item={item}
                        />
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default GamesPage