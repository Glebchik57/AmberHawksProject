import styles from './page.module.css'
import Navigation from '@/components/UI/navigation/Navigation';
import Footer from "@/components/UI/footer/Footer";
import Form from '@/components/UI/form/Form';
import KidsPage from '@/components/pages/Kids/KidsPage';


export default async function Flag() {
    const imageForm = '/kids_form.png'
    return (
        <>
            <Navigation />
            <div className={styles.container}>
                <main>
                    <KidsPage />
                    <div className={styles.container}>
                        <Form img={imageForm} />
                    </div>
                </main>
            </div>
            <Footer />
        </>
    );
}