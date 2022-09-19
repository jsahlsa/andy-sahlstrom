import Layout from '../../components/layout';
import Nav from '../../components/nav';
import RenderMedia from '../../components/renderMedia';
import data from '/public/data.json';

export default function Home() {
  const pageData = data[1].sculptures[7].build_a_rainbow;
  console.log(pageData);

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
