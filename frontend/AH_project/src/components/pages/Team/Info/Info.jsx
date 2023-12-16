import styles from './Info.module.css'
import Image from 'next/image';
import teamMain from '../../../../assets/img/teamMain.png'

function Info() {
    return (
        <div className={styles.wrapper}>
            <Image
                src={teamMain}
                alt='info'
            />
            <div>
                <h1 className={styles.title}>Янтарные ястребы</h1>
                <p className={styles.text}>
                    Янтарные Ястребы - это фантастическая команда по американскому футболу!<br /> Они считаются одной из самых агрессивных и талантливых команд в лиге.
                </p>
                <p className={styles.text}>
                    Янтарные Ястребы известны своей яркой игрой и бескомпромиссным подходом к соперникам. Они всегда готовы дать все от себя на поле и бороться до последней минуты. За счет своей быстроты, смекалки и отличной командной работы, Янтарные Ястребы всегда создают непредсказуемые ситуации для противника.
                </p>
            </div>
        </div>
    )
}

export default Info