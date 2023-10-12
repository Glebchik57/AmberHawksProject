import styles from './page.module.css'
import Navigation from '@/components/UI/navigation/Navigation';
import Footer from "@/components/UI/footer/Footer";
import FlagPage from '@/components/pages/Flag/FlagPage';

export default async function Flag() {
    return (
        <>
            <Navigation />
            <div className={styles.container}>
                <main>
                    <FlagPage />
                </main>
            </div>
            <Footer />
        </>
    );
}