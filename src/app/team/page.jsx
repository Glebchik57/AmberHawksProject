import styles from './page.module.css'
import TeamPage from "@/components/pages/Team/TeamPage";
import Navigation from '@/components/UI/navigation/Navigation';
import Footer from "@/components/UI/footer/Footer";

export default async function Team() {
    return (
        <>
            <Navigation />
            <div className={styles.container}>
                <main>
                    <TeamPage />
                </main>
            </div>
            <Footer />
        </>
    );
}