import styles from './HeaderNews.module.css'
import Image from "next/image"
import teamMain from '../../../../assets/img/teamMain.png'

function HeaderNews() {
    return (
        <div className={styles.wrapper}>
            <Image
                src={teamMain}
                alt='info'
            />
        </div>
    )
}

export default HeaderNews