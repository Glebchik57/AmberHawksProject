import styles from './PlayersItem.module.css'
import Image from 'next/image';

function PlayersItem({ player }) {
    return (
        <li className={styles.item}>
            <Image
                className={styles.img}
                src={player.photo}
                alt='player'
                width={360}
                height={480}
            />
            <h3 className={styles.name}>{player.first_name} {player.last_name}</h3>
            <p>{player.position}</p>

        </li>
    )
}

export default PlayersItem