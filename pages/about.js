import Nav from '../components/nav';
import RenderImage from '../components/renderImage';
import data from '/public/data.json';
import Image from 'next/image';

export default function Home() {
  const pageData = data[5].about[0];
  console.log(pageData);
  return (
    <div className="container">
      <Nav />

      <main>
        <div className="img-wrapper">
          <Image
            src={pageData.image}
            layout="responsive"
            width={pageData.width}
            height={pageData.height}
            objectFit="cover"
          />
        </div>
        <p className="about-text">
          Andy Sahlstrom is an Interactive Technology Engineer, Inventor, and
          Kinetic Artist. He resides in Brooklyn New York with his dog Biscuit.{' '}
        </p>
      </main>

      <footer>
        <p>coming soon…</p>
      </footer>
      <style jsx>{`
        .img-wrapper {
          object-fit: cover;
          display: grid;
          width: clamp(10rem, 30vw, 1000rem);
          height: 100%;
          border-radius: 50%;
          overflow: hidden;
        }
        img {
          border-radius: 50%;
        }
        .wide-image {
          grid-column: span 4;
          grid-row: span 3;
        }
        .tall-image {
          grid-row: span 4;
          grid-column: span 3;
        }
      `}</style>
    </div>
  );
}
