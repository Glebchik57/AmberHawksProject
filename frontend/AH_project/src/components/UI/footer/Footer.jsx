import styles from './Footer.module.css';
import Link from 'next/link';
import Vk from '../iconsComponents/Vk';
import Youtube from '../iconsComponents/Youtube';
import Button from '../button/Button';

export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.contacts}>
                    <div>
                        <div><Link href={'https://yandex.ru/maps/-/CDUUIWmN'}>улица Согласия, 41, Калининград</Link></div>
                        <div><Link href={'tel:+74012346578'}>+7 (4012) 346-578</Link></div>
                        <div><Link href={'mailto:example@email.com'}>example@email.com</Link></div>
                    </div>
                    <div className={styles.social}>
                        <div className={styles.vk}><Link href={'https://vk.com/afkld'}><Vk /></Link></div>
                        <div className={styles.youtube}><Link href={'https://www.youtube.com/channel/UCT6OZJVJK7ximMVnvt9wZKw'}><Youtube /></Link></div>
                    </div>
                </div>
                <nav>
                    <ul className={styles.list}>
                        <li>
                            <Link href='/about'>
                                Федерация
                            </Link>
                        </li>
                        <li>
                            <Link href='/news'>
                                Новости и события
                            </Link>
                        </li>
                        <li>
                            <Link href='/games'>
                                Игры
                            </Link>
                        </li>
                        <li>
                            <Link href='/team'>
                                Янтарные ястребы
                            </Link>
                        </li>
                        <li>
                            <Link href='/flag'>
                                Флаг футбол
                            </Link>
                        </li>
                        <li>
                            <Link href='/kids'>
                                Дети
                            </Link>
                        </li>
                    </ul>
                </nav>

                <div className={styles.folow}>
                    <div className={styles.text}>Мы рады каждому</div>
                </div>
            </div>
        </div>
    );
}