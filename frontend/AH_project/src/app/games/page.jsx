import styles from './page.module.css'
import Navigation from '../../components/UI/navigation/Navigation';
import Footer from "../../components/UI/footer/Footer";
import Form from '../../components/UI/form/Form';
import GamesPage from '../../components/pages/GamesPage/GamesPage';


export default async function Games() {
    const imageForm = '/player_form.png'
    return (
        <>
            <Navigation />
            <div className={styles.container}>
                <main>
                    <GamesPage />
                    <div className={styles.container}>
                        <Form img={imageForm} />
                    </div>
                </main>
            </div>
            <Footer />
        </>
    );
}