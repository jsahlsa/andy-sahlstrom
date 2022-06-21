import Layout from '../../components/layout';
import Nav from '../../components/nav';

export default function Home() {
  return (
    <Layout>
      <Nav />

      <main>
        <h1 className="title">Instruments</h1>

        <p className="description">
          Gonna be building in plain sight using{' '}
          <a href="https://nextjs.org">NEXT.JS</a>
        </p>
      </main>

      <footer>
        <p>coming soon…</p>
      </footer>

      <style jsx>{``}</style>
    </Layout>
  );
}
