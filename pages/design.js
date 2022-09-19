import Head from 'next/head';
import Layout from '../components/layout';
import Nav from '../components/nav';
import RenderMedia from '../components/renderMedia';
import data from '/public/data.json';

export default function Home() {
  const pageData = data[4].design;
  console.log(pageData);
  return (
    <Layout>
      <Nav />

      <main>
        <RenderMedia props={pageData} />
      </main>
    </Layout>
  );
}
