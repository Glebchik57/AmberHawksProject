import styles from './page.module.css'
import Navigation from '@/components/UI/navigation/Navigation';
import Footer from "@/components/UI/footer/Footer";


export default async function Flag() {
    return (
        <>
            <Navigation />
            <div className={styles.container}>
                <main>

                </main>
            </div>
            <Footer />
        </>
    );
}