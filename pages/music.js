import Head from 'next/head';
import Nav from '../components/nav';
import data from '/public/data.json';
import RenderMusic from '../components/renderMusic';

export default function Home() {
  const pageData = data[3].music;
  console.log(pageData);
  return (
    <div className="container">
      <Head>
        <title>Music</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <main>
        <h4>under construction</h4>
        {pageData.map((item) => {
          return <RenderMusic {...item} key={item.name} />;
        })}
      </main>

      <footer>
        <p>coming soon…</p>
      </footer>
    </div>
  );
}
