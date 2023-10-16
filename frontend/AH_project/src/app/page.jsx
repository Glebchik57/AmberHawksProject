import Footer from '@/components/UI/footer/Footer';
import styles from './page.module.css'
import Navigation from '@/components/UI/navigation/Navigation';
import HomePage from '@/components/pages/Home/HomePage';
import News from '@/components/pages/Home/News/News';
import TrainingSchedule from '@/components/pages/Home/trainingSchedule/TrainingSchedule';
import Form from '@/components/UI/form/Form';
import Place from '@/components/pages/Home/Place/Place';

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
      <div className={styles.backgoundSchedule}>
        <div className={styles.container}>
          <TrainingSchedule />
        </div>
      </div>
      <div className={styles.container}>
        <Place />
      </div>
      <div className={styles.container}>
        <Form />
      </div>
      <Footer />
    </>
  );
}