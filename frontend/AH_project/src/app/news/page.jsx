import styles from './page.module.css'
import Navigation from '../../components/UI/navigation/Navigation';
import Footer from "../../components/UI/footer/Footer";
import Form from '../../components/UI/form/Form';
import NewsPage from '../../components/pages/News/NewsPage';


export default async function News() {
    const imageForm = '/player_form.png'
    return (
        <>
            <Navigation />
            <div className={styles.container}>
                <main>
                    <NewsPage />
                    <div className={styles.container}>
                        <Form img={imageForm} />
                    </div>
                </main>
            </div>
            <Footer />
        </>
    );
}