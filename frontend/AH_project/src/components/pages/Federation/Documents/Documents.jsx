import Link from 'next/link'
import styles from './Documents.module.css'
import { getDocuments } from '../../../../api/api'

async function Documents() {
    const documents = await getDocuments();
    // const documents = [
    //     {
    //         title: 'Правила',
    //         file: '/test.pdf',
    //     },
    //     {
    //         title: 'Устав федерации',
    //         file: '/test.pdf',
    //     },
    //     {
    //         title: 'Регламент',
    //         file: '/test.pdf',
    //     },
    // ]
    return (
        <div className={styles.wrapper}>
            <div>
                <h1 className={styles.title}>Документы</h1>
            </div>
            <ul className={styles.list}>
                {documents.length ? documents.map((document) => (
                    <li className={styles.item} key={document.title}>
                        <Link className={styles.link} href={document.file} download>
                            <div className={styles.link_wrapper}>
                                {document.title}
                            </div>
                        </Link>
                    </li>
                )) : <div className="none-info">Здесь пока нет документов</div>}
            </ul>
        </div>
    )
}

export default Documents