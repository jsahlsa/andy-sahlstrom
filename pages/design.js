import Head from 'next/head';
import Nav from '../components/nav';
import RenderMedia from '../components/renderMedia';
import data from '/public/data.json';

export default function Home() {
  const pageData = data[4].design;
  console.log(pageData);
  return (
    <div className="container">
      <Nav />

      <main>
        <RenderMedia props={pageData} />
      </main>

      <footer>
        <p>coming soon…</p>
      </footer>
    </div>
  );
}
