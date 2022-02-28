import Head from 'next/head';
import Image from 'next/image';
import airlessOrgan1 from '/public/images/airless-organ/airless-organ-1.jpeg';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Instruments</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Andy's new personal site
        </h1>

        <p className="description">
          Gonna be building in plain sight using <a href="https://nextjs.org">NEXT.JS</a>
        </p>
        
              <Image
                  src={airlessOrgan1}
                  width={500}
                  height={282}
              />

        
      </main>

      <footer>
        <p>coming soon…</p>
          </footer>
          </div>
          )
      }