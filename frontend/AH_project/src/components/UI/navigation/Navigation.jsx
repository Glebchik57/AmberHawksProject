'use client'

import Link from 'next/link';
import styles from './Navigation.module.css';
import { usePathname } from 'next/navigation';
import { useState } from "react";
import NavigationMobile from './navigationMobile/NavigationMobile.jsx';

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setOpen] = useState(false);

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
      name: 'Женщины',
      link: '/women'
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
          <div className={styles.header__burger} onClick={() => setOpen(true)}>
            <div className={styles.header__burgerItem}></div>
            <div className={styles.header__burgerItem}></div>
            <div className={styles.header__burgerItem}></div>
          </div>
          <nav className={styles.header__nav}>
            {isOpen ? <NavigationMobile navLink={navLink} pathname={pathname} setOpen={setOpen} /> : ''}
            <ul className={styles.header__list}>
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