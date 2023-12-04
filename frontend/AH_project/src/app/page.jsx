import Footer from '../components/UI/footer/Footer';
import styles from './page.module.css'
import Navigation from '../components/UI/navigation/Navigation';
import HomePage from '../components/pages/Home/HomePage';
import News from '../components/pages/Home/News/News';
import Form from '../components/UI/form/Form';
import AboutTeam from '../components/pages/Home/AboutTeam/AboutTeam';
import Table from '../components/pages/Home/Table/Table';


async function getDocuments() {
  const res = await fetch('https://amfoot39.ru/api/documents')
  if (!res.ok) {
    console.log('Failed to fetch data')
  }
  const data = await res.json();
  return data;
}

async function getEvents() {
  const res = await fetch('https://amfoot39.ru/api/events')
  if (!res.ok) {
    console.log('Failed to fetch data')
  }
  const data = await res.json();
  return data;
}

async function getNews() {
  const res = await fetch('https://amfoot39.ru/api/news')
  if (!res.ok) {
    console.log('Failed to fetch data')
  }
  const data = await res.json();
  return data;
}

async function getContacts() {
  const res = await fetch('https://amfoot39.ru/api/contacts')
  if (!res.ok) {
    console.log('Failed to fetch data')
  }
  const data = await res.json();
  return data;
}

async function getGames() {
  const res = await fetch('https://amfoot39.ru/api/games')
  if (!res.ok) {
    console.log('Failed to fetch data')
  }
  const data = await res.json();
  return data;
}


export default async function Home() {
  // const players = await getPlayers();

  const imageForm = '/player_form.png'
  return (
    <>
      <div className={styles.wrapper}>
        {/* <div>{asteroid}</div> */}

        {/* {Object.keys(players).map(el => <div>{el}</div>)} */}
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
        <Form img={imageForm} />
      </div>
      <Footer />
    </>
  );
}