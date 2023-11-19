import styles from './page.module.css'
import Navigation from '@/components/UI/navigation/Navigation';
import Footer from "@/components/UI/footer/Footer";
import Form from '@/components/UI/form/Form';
import FederationPage from '@/components/pages/Federation/FederationPage';

export default async function About() {
    const imageForm = '/player_form.png'
    return (
        <>
            <Navigation />
            <div className={styles.container}>
                <main>
                    <FederationPage />
                    <div className={styles.container}>
                        <Form img={imageForm} />
                    </div>
                </main>
            </div>
            <Footer />
        </>
    );
}