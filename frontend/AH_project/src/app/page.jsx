import Footer from '@/components/UI/footer/Footer';
import styles from './page.module.css'
import Navigation from '@/components/UI/navigation/Navigation';
import HomePage from '@/components/pages/Home/HomePage';
import News from '@/components/pages/Home/News/News';
import Form from '@/components/UI/form/Form';
import AboutTeam from '@/components/pages/Home/AboutTeam/AboutTeam';
import Table from '@/components/pages/Home/Table/Table';

export default async function Home() {
  return (
    <>
      <div className={styles.wrapper}>
        <Navigation />
        <div>
          <main>
            <HomePage />
          </main>
        </div>
      </div>
      <div className={styles.container}>
        <News />
      </div>
      <div className={styles.container}>
        <AboutTeam />
      </div>
      <div className={styles.container}>
        <Table />
      </div>
      <div className={styles.container}>
        <Form />
      </div>
      <Footer />
    </>
  );
}