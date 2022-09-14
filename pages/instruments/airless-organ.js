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
        <h1 className="title">{pageData[0].name}</h1>

        <RenderMedia props={pageData} />
      </main>
    </Layout>
  );
}
