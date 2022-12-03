import Layout from '../../components/layout';
import Nav from '../../components/nav';
import styles from '../../styles/index_pages.module.css';
import Image from 'next/image';

import data from '/public/data.json';

export default function Home() {
  const pageData = data[2].timelapse;

  return (
    <Layout>
      <Nav />

      <main>
        <h1 className="title">Timelapse</h1>
        <div className={styles.images_wrapper}>
          {pageData.map((page, i) => {
            const instrument = Object.keys(page);
            const instrumentName = instrument.toString().split('_').join(' ');
            const values = Object.values(page);
            const eachInstrument = values[0];
            // destructure object after first instance with a jpeg image is found
            const hasImages = eachInstrument.find((item) => {
              return item.image.split('.').pop() === 'jpeg';
            });
            const onlyVideo = eachInstrument.find(
              (item) => item.image.split('.').pop() === 'mp4'
            );
            return (
              <>
                <div className={styles.item_container}>
                  <div className={styles.image_container}>
                    {hasImages?.name ? (
                      <Image
                        alt={hasImages.name}
                        src={hasImages.image}
                        width={hasImages.width}
                        height={hasImages.height}
                        objectFit="cover"
                      />
                    ) : (
                      <Image
                        alt={onlyVideo.name}
                        src={onlyVideo.poster}
                        width={onlyVideo.width}
                        height={onlyVideo.height}
                        objectFit="cover"
                      />
                    )}
                  </div>
                  <h2 className={styles.head2}>{instrumentName}</h2>
                </div>
              </>
            );
          })}
        </div>
      </main>
    </Layout>
  );
}
