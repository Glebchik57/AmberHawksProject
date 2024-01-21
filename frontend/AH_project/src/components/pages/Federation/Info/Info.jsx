import styles from './Info.module.css'
import Image from 'next/image';
import image from '../../../../assets/img/federation.png'

function Info() {
    return (
        <div className={styles.wrapper}>
            <Image
                src={image}
                alt='info'
            />
            <div className={styles.info}>
                <h1 className={styles.title}>О федерации</h1>
                <p className={styles.text}>
                    Региональная федерация американского футбола - это организация, которая занимается развитием и организацией американского футбола на региональном уровне. Она имеет свои собственные правила и нормы, согласованные с национальной федерацией.
                </p>
                <p className={styles.text}>
                    Региональная федерация обычно охватывает определенную территорию, такую как штат, провинцию или регион, и отвечает за организацию соревнований, тренировок, а также развитие и поддержку команд и игроков.
                </p>
            </div>

            <div className={styles.video}>
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/Ug9B2ossvJQ?si=CCiZD-18jq7pqDH2" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
            <div>
                <p className={styles.text}>
                    В региональной федерации также могут быть проводимы обучающие мероприятия, тренировочные лагеря и семинары для тренеров и арбитров, чтобы повысить уровень подготовки и судейства.


                </p>
                <p className={styles.text}>
                    Региональная федерация американского футбола играет важную роль в развитии и популяризации этого спорта на местном уровне. Она способствует формированию командного духа, развитию физических и ментальных навыков игроков, а также созданию возможностей для талантливых футболистов продвигаться на более высокие уровни соревнований.
                </p>
            </div>
        </div>
    )
}

export default Info