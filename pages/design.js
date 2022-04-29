import Head from 'next/head';
import Link from 'next/link';
import Nav from '../components/nav';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Instruments</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <main>
        <h4>under construction</h4>
      </main>

      <footer>
        <p>coming soon…</p>
      </footer>
    </div>
  );
}
