import Layout from '../../components/layout';
import Nav from '../../components/nav';
import RenderMedia from '../../components/renderMedia';
import data from '/public/data.json';

const pageData = data[0].instruments[4].touchless_tongue_drum;

export default function Home() {
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
