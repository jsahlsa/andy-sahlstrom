import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';
import Nav from '../components/nav';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Andy Sahlstrom</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <main>
        <h1 className="title">Andy's new personal site</h1>

        <p className="description">
          Gonna be building in plain sight using{' '}
          <a href="https://nextjs.org">NEXT.JS</a>
        </p>

        <Link href="/instruments">
          <a>instruments</a>
        </Link>
      </main>

      <footer>
        <p>coming soon…</p>
      </footer>
    </Layout>
  );
}
