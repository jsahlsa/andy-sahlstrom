import Head from 'next/head';
import Image from 'next/image';

import data from '/public/data.json';

export default function Home() {
  const airlessOrganData = data[0].instruments[0].airless_organ;
  console.log(airlessOrganData[0].name);
  return (
    <div className="container">
      <Head>
        <title>{airlessOrganData[0].name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">Andy's new personal site</h1>

        <p className="description">
          Gonna be building in plain sight using{' '}
          <a href="https://nextjs.org">NEXT.JS</a>
        </p>
        <div className="images-wrapper">
          {airlessOrganData.map((item, i) => {
            if (item.width > item.height) {
              return (
                <div
                  key={i}
                  className="img-container wide-image"
                  style={{ position: 'relative' }}
                >
                  <Image
                    src={item.image}
                    layout="responsive"
                    width={item.width}
                    height={item.height}
                    objectFit="cover"
                  />
                </div>
              );
            } else {
              return (
                <div
                  key={i}
                  className="img-container tall-image"
                  style={{ position: 'relative' }}
                >
                  <Image
                    src={item.image}
                    layout="responsive"
                    width={item.width}
                    height={item.height}
                    objectFit="cover"
                  />
                </div>
              );
            }
          })}
        </div>
      </main>

      <footer>
        <p>coming soon…</p>
      </footer>
      <style jsx>{`
        main > h1 {
          border: red solid 10px;
        }

        video {
          width: 300px;
        }
        .images-wrapper {
          width: 80vw;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          grid-template-rows: repeat(auto-fit, minmax(100px, 1fr));
          grid-auto-flow: dense;
          grid-gap: 10px;
          place-items: center;
        }
        .img-container {
          object-fit: cover;
          display: grid;
          width: 100%;
          height: 100%;
        }
        .wide-image {
          grid-column: span 2;
        }
        .tall-image {
          grid-row: span 2;
        }
      `}</style>
    </div>
  );
}
