import Image from 'next/image';

export default function RenderImage({ image, width, height }) {
  return (
    <div
      key={image}
      className={
        width > height ? 'img-container wide-image' : 'img-container tall-image'
      }
      style={{ position: 'relative' }}
    >
      <Image
        src={image}
        layout="responsive"
        width={width}
        height={height}
        objectFit="cover"
      />
      <style jsx>{`
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
