import styles from './Footer.module.css';
import Link from 'next/link';
import Button from '../button/Button';

export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.contacts}>
                    <div>
                        <div><Link href={'https://yandex.ru/maps/-/CDUUIWmN'}>улица Согласия, 39, Калининград</Link></div>
                        <div><Link href={'tel:+74012346578'}>+7 (4012) 346-578</Link></div>
                        <div><Link href={'mailto:example@email.com'}>example@email.com</Link></div>
                    </div>
                    <div className={styles.social}>
                        <div><Link href={'https://vk.com/afkld'}>Вконтакте</Link></div>
                        <div><Link href={'https://www.youtube.com/channel/UCT6OZJVJK7ximMVnvt9wZKw'}>Youtube</Link></div>
                    </div>
                </div>
                <nav>
                    <ul className={styles.list}>
                        <li>
                            <a href='#'>
                                О федерации
                            </a>
                        </li>
                        <li>
                            <Link href='/team'>
                                Янтарные ястребы
                            </Link>
                        </li>
                        <li>
                            <a href='#'>
                                Флаг футбол
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                Детская команда
                            </a>
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