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
      <Nav />

      <main>
        <h1>Music</h1>
        <div className={styles.tracks_container}>
          {pageData.map((item) => {
            return <RenderMusic {...item} key={item.name} />;
          })}
        </div>
      </main>
    </Layout>
  );
}
