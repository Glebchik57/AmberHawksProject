import Link from 'next/link'
import styles from './Documents.module.css'

function Documents() {
    const documents = [
        {
            name: 'Правила',
            link: ''
        },
        {
            name: 'Устав федерации',
            link: ''
        },
        {
            name: 'Регламент',
            link: ''
        },
    ]
    return (
        <div className={styles.wrapper}>
            <div>
                <h1 className={styles.title}>Документы</h1>
            </div>
            <ul className={styles.list}>
                {documents.map(({ name }) => (
                    <li className={styles.item} key={name}>
                        <Link className={styles.link} href='!#'>
                            <div className={styles.link_wrapper}>
                                {name}
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Documents