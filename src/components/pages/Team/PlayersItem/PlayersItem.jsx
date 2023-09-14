import styles from './PlayersItem.module.css'
import Image from 'next/image';

function PlayersItem({ player }) {
    return (
        <li className={styles.item}>
            <Image
                src={player.image}
                alt='player'
                width={262}
                height={245}
            />
            <h3 className={styles.name}>{player.name}</h3>
            <div className={styles.info}>
                <p>{player.age} года</p>
                <p>{(player.height).toString().slice(0, 1)} м {(player.height).toString().slice(1, 3)} см</p>
                <p>{player.position}</p>
                <p>в команде с {player.date}</p>
                <p>{player.rank}</p>
            </div>
        </li>
    )
}

export default PlayersItem