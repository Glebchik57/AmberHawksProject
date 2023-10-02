import Link from 'next/link';
import styles from './Navigation.module.css';


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
                  О федерации
                </Link>
              </li>
              <li>
                <Link className={styles.header__text} href='/team'>
                  Янтарные ястребы
                </Link>
              </li>
              <li>
                <a className={styles.header__text} href='#'>
                  Флаг футбол
                </a>
              </li>
              <li>
                <Link className={styles.header__text} href='/kids'>
                  Детская команда
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className={styles.header__icons}>
          <div className={styles.vk}></div>
          <div className={styles.youtube}></div>
        </div>
      </div>
    </div>
  );
}