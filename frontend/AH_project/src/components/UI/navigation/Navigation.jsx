import Link from 'next/link';
import styles from './Navigation.module.css';
import Vk from '../iconsComponents/Vk';
import Youtube from '../iconsComponents/Youtube';


export default function Navigation() {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <Link href='/' className={styles.logo}></Link>
        <div>
          <nav>
            <ul className={styles.header__nav}>
              <li>
                <Link className={styles.header__text} href='/about'>
                  Федерация
                </Link>
              </li>
              <li>
                <Link className={styles.header__text} href='/news'>
                  Новости и события
                </Link>
              </li>
              <li>
                <Link className={styles.header__text} href='/news'>
                  Игры
                </Link>
              </li>
              <li>
                <Link className={styles.header__text} href='/team'>
                  Янтарные ястребы
                </Link>
              </li>
              <li>
                <a className={styles.header__text} href='/flag'>
                  Флаг футбол
                </a>
              </li>
              <li>
                <Link className={styles.header__text} href='/kids'>
                  Дети
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className={styles.header__icons}>
          <div className={styles.vk}>
            <Link href={'https://vk.com/afkld'}>
              <Vk />
            </Link>
          </div>
          <div className={styles.youtube}>
            <Link href={'https://www.youtube.com/channel/UCT6OZJVJK7ximMVnvt9wZKw'}>
              <Youtube />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}