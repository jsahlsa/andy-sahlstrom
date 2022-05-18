import { useEffect } from 'react';
import Image from 'next/image';
import RenderImage from './renderImage';
import RenderVideo from './renderVideo';

export default function RenderMedia(data) {
  const pageData = data.props;
  useEffect(() => {
    const path = window.location.pathname;
    const fileEnd = path.split('/').pop();
    const name = fileEnd.split('-').join(' ');
    document.title = name;
  }, []);

  return (
    <div className="images-wrapper">
      {pageData.map((item, i) => {
        if (item.image.split('.').pop() === 'mp4') {
          return <RenderVideo {...item} key={i} />;
        }
      })}
      {pageData.map((item, i) => {
        if (item.image.split('.').pop() === 'jpeg') {
          return <RenderImage {...item} key={i} />;
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
          height: clamp(20rem, 150vh, 100rem);
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(3rem, 1fr));
          grid-template-rows: repeat(auto-fit, minmax(3rem, 1fr));
          grid-auto-flow: dense;
          grid-gap: 10px;
          place-items: center;
        }
      `}</style>
    </div>
  );
}
