import Head from 'next/head';
import Layout from '../../components/layout';
import Nav from '../../components/nav';
import RenderMedia from '../../components/renderMedia';
import data from '/public/data.json';

export default function Home() {
  const pageData = data[4].design[0].art;
  return (
    <Layout>
      <Nav />

      <main>
        <h1 className="title">{pageData[0].title}</h1>
        <RenderMedia props={pageData} />
      </main>
    </Layout>
  );
}
