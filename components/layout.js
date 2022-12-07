import styles from '../styles/layout.module.css';
import Head from 'next/head';

export default function Layout({ children }) {
  const year = new Date().getFullYear();

  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <title>Andy Sahlstrom</title>
        <meta
          name="description"
          content="Andy Sahlstrom's Website - Interactive Technologist, Kinetic Artist, and Inventor"
          key="desc"
        />
        <meta
          name="keywords"
          content="Interactive technology, inventor, kinetic artist"
        />
        <meta name="author" content="Joe Sahlstrom" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="all" />
        <meta property="og:title" content="Andy's site" />
        <meta property="og:url" content="https://andysahlstrom.com" />
        <meta
          property="og:image"
          content="https://andysahlstrom.com/andy-og.png"
        />
        <meta
          property="og:image:secure_url"
          content="https://andysahlstrom.com/andy-og.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@shampooty" />
        <meta name="twitter:creator" content="@shampooty" />
        <meta property="twitter:domain" content="https://andysahlstrom.com" />
        <meta property="twitter:url" content="https://andysahlstrom.com" />
        <meta name="twitter:title" content="Andy Sahlstrom" />
        <meta name="twitter:description" content="Andy Sahlstrom's Portfolio" />
        <meta
          name="twitter:image:src"
          content="https://andysahlstrom.com/andy-og.png"
        />
        <link rel="icon" sizes="any" type="image/svg+xml" href="/logo_a.svg" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />

        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <div className={styles.container}>
        {children}
        <footer className={styles.footer}>
          <p>Andy Sahlstrom &copy;{year}</p>
        </footer>
      </div>
    </>
  );
}
