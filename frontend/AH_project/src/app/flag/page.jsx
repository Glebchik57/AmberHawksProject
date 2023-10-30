import styles from './page.module.css'
import Navigation from '@/components/UI/navigation/Navigation';
import Footer from "@/components/UI/footer/Footer";
import FlagPage from '@/components/pages/Flag/FlagPage';
import Form from '@/components/UI/form/Form';


export default async function Flag() {
    const imageForm = '/flag_form.png'
    return (
        <>
            <Navigation />
            <div className={styles.container}>
                <main>
                    <FlagPage />
                    <div className={styles.container}>
                        <Form img={imageForm} />
                    </div>
                </main>
            </div>
            <Footer />
        </>
    );
}