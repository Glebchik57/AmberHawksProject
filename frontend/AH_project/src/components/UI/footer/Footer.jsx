import styles from './Footer.module.css';
import Image from 'next/image';
import image from '../../../assets/img/logo_footer.png'
import Link from 'next/link';
import Vk from '../iconsComponents/Vk';
import Youtube from '../iconsComponents/Youtube';


export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.wrapper}>
                <Image
                    src={image}
                    alt='logo'
                />
                <div className={styles.phone}>
                    <div>
                        <Link className={styles.phoneLink} href="tel:+74012346578">+7 (4012) 346-578</Link>
                    </div>
                    <div className={styles.phoneText}>Единый номер связи</div>
                </div>

                <div className={styles.contacts}>

                    <div className={styles.address}>л. Яблоневая, 13, Калининград</div>
                    <div>
                        <Link className={styles.email} href="mailto:example@email.com">example@email.com</Link>
                    </div>
                </div>

                <div className={styles.social}>
                    <div className={styles.vk}><Link href={'https://vk.com/afkld'}><Vk /></Link></div>
                    <div className={styles.youtube}><Link href={'https://www.youtube.com/channel/UCT6OZJVJK7ximMVnvt9wZKw'}><Youtube /></Link></div>

                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.agreements}>
                    <Link href="!#">Пользовательское соглашение</Link>
                    <Link href="!#">Политика персональных данных</Link>
                </div>

                <div className={styles.cookie}>Мы используем файлы cookie, для персонализации сервисов и повышения удобства пользования сайтом. Если вы не согласны на их использование, поменяйте настройки браузера.</div>
            </div>
        </div>
    );
}