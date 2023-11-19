'use client'

import Link from 'next/link';
import styles from './Navigation.module.css';
import { usePathname } from 'next/navigation';


export default function Navigation() {
  const pathname = usePathname();

  const navLink = [
    {
      name: 'Федерация',
      link: '/about'
    },
    {
      name: 'Новости и события',
      link: '/news'
    },
    {
      name: 'Игры',
      link: '/games'
    },
    {
      name: 'Янтарные ястребы',
      link: '/team'
    },
    {
      name: 'Флаг футбол',
      link: '/flag'
    },
    {
      name: 'Дети',
      link: '/kids'
    },
  ]


  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <Link href='/' className={styles.logo}></Link>
        <div>
          <nav>
            <ul className={styles.header__nav}>
              {navLink.map(({ link, name }) => (
                <li key={name}>
                  <Link className={`${styles.header__text} ${pathname == link ? styles.active : ''}`} href={link}>
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}