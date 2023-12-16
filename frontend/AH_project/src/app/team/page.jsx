import styles from './page.module.css'
import TeamPage from "@/components/pages/Team/TeamPage";
import Navigation from '@/components/UI/navigation/Navigation';
import Footer from "@/components/UI/footer/Footer";
import Form from '@/components/UI/form/Form';


export default async function Team() {
    const imageForm = '/player_form.png'
    return (
        <>
            <Navigation />
            <div className={styles.container}>
                <main>
                    <TeamPage />
                    <div className={styles.container}>
                        <Form img={imageForm} />
                    </div>
                </main>
            </div>
            <Footer />
        </>
    );
}