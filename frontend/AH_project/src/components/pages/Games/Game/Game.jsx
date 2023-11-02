import styles from './Game.module.css'

function Game({ item }) {

    return (
        <li className={styles.item}>
            <div>
                <span>Янтарные ястребы</span>
                <span>{item.points}</span>
                :
                <span>{item.points_}</span>
                <span>{item.team}</span>
            </div>
            <div>{item.date}</div>
            <div>{item.place}</div>
        </li>
    )
}

export default Game