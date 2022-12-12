import Layout from '../../components/layout';
import Nav from '../../components/nav';
import styles from '../../styles/index_pages.module.css';
import Image from 'next/image';
import Link from 'next/link';

import data from '/public/data.json';

export default function Home() {
  const pageData = data[0].instruments;

  return (
    <Layout>
      <Nav />

      <main>
        <h1 className="title">Instruments</h1>
        <div className={styles.images_wrapper}>
          {pageData.map((page, i) => {
            const instrument = Object.keys(page);
            const instrumentName = instrument.toString().split('_').join(' ');
            const slug = instrument.toString().split('_').join('-');

            const values = Object.values(page);
            const eachInstrument = values[0];
            // destructure object after first instance with a jpeg image is found
            const { name, image, width, height } = eachInstrument.find(
              (item) => {
                return item.image.split('.').pop() === 'jpeg';
              }
            );
            return (
              <>
                <Link href={`/instruments/${slug}`}>
                  <div className={styles.item_container}>
                    <div className={styles.image_container}>
                      <Image
                        alt={name}
                        src={image}
                        width={width}
                        height={height}
                        objectFit="cover"
                      />
                    </div>
                    <h2 className={styles.head2}>{instrumentName}</h2>
                  </div>
                </Link>
              </>
            );
          })}
        </div>
      </main>
    </Layout>
  );
}
