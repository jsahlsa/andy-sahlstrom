import RenderMedia from '../../components/renderMedia';
import data from '/public/data.json';
import Nav from '../../components/nav';
import Layout from '../../components/layout';

const pageData = data[0].instruments[2].midi_player_piano;

export default function Home() {
  return (
    <Layout>
      <Nav />
      <main>
        <h1 className="title">{pageData[0].name}</h1>

        <p className="description">
          Gonna be building in plain sight using{' '}
          <a href="https://nextjs.org">NEXT.JS</a>
        </p>
        <RenderMedia props={pageData} />
      </main>

      <footer>
        <p>coming soon…</p>
      </footer>
    </Layout>
  );
}
