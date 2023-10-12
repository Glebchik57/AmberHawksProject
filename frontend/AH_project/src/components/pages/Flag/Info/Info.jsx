import styles from './Info.module.css'
import Image from 'next/image';
import flag from '../../../../assets/img/flag.png'

function Info() {
    return (
        <div className={styles.wrapper}>
            <Image
                src={flag}
                alt='info'
            />
            <div>
                <h1 className={styles.title}>Женская команда по флаг-футболу</h1>
                <p className={styles.text}>

                </p>
                <p className={styles.text}>

                </p>
            </div>
        </div>
    )
}

export default Info