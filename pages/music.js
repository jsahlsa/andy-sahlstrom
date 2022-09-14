import Head from 'next/head';
import Nav from '../components/nav';
import data from '/public/data.json';
import RenderMusic from '../components/renderMusic';
import Layout from '../components/layout';
import styles from '../styles/music.module.css';

export default function Home() {
  const pageData = data[3].music;
  console.log(pageData);
  return (
    <Layout>
      <Head>
        <title>Music</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <main>
        <h1>Music</h1>
        <div className={styles.tracks_container}>
          {pageData.map((item) => {
            return <RenderMusic {...item} key={item.name} />;
          })}
        </div>
      </main>

      <footer>
        <p>coming soon…</p>
      </footer>
    </Layout>
  );
}
