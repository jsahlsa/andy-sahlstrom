import Nav from '../../components/nav';
import RenderMedia from '../../components/renderMedia';
import Layout from '../../components/layout';

import data from '/public/data.json';

export default function Home() {
  const pageData = data[0].instruments[0].airless_organ;

  return (
    <Layout>
      <Nav />
      <main>
        <h1 className="title">Andy's new personal site</h1>

        <p className="description">
          Gonna be building in plain sight using{' '}
          <a href="https://nextjs.org">NEXT.JS</a>
        </p>
        <RenderMedia props={pageData} />
      </main>

      <footer>
        <p>coming soon…</p>
      </footer>
      <style jsx>{`
        main > h1 {
          border: red solid 10px;
        }
      `}</style>
    </Layout>
  );
}
