import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function RenderMedia(data) {
  const [pageName, setPageName] = useState(null);

  const pageData = data.props;
  useEffect(() => {
    const path = window.location.pathname;
    const fileEnd = path.split('/').pop();
    const name = fileEnd.split('-').join(' ');
    setPageName(name);
    document.title = pageName;
  }, []);

  return (
    <div className="images-wrapper">
      {pageData.map((item, i) => {
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
          grid-template-columns: repeat(auto-fit, minmax(65px, 1fr));
          grid-template-rows: repeat(auto-fit, minmax(65px, 1fr));
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
