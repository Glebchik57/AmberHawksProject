'use client'

import { useSpring, animated } from '@react-spring/web';
import Link from 'next/link';
import styles from './NavigationMobile.module.css';

export default function NavigationMobile({ navLink, pathname, setOpen }) {
    const [props, api] = useSpring(
        () => ({
            from: { top: -520 },
            to: { top: -40 },
        }),
        []
    )

    return (
        <animated.div
            style={props}
            className={styles.menu}
            onClick={() => setOpen(false)}>
            <ul className={styles.menuList}>
                <li><Link href='/' className={styles.logo}></Link></li>
                {navLink.map(({ link, name }) => (
                    <li className={styles.menuItem} key={name}>
                        <Link className={`${styles.text} ${pathname == link ? styles.active : ''}`} href={link}>
                            {name}
                        </Link>
                    </li>
                ))}
            </ul>
        </animated.div>
    )
}