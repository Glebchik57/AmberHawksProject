import styles from './PlayersItem.module.css'
import Image from 'next/image';

function PlayersItem({ player }) {
    return (
        <li className={styles.item}>
            <Image
                src={player.image}
                alt='player'
                width={360}
                height={480}
            />
            <h3 className={styles.name}>{player.name}</h3>
            <p>{player.position}</p>

        </li>
    )
}

export default PlayersItem