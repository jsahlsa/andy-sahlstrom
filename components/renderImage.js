import Image from 'next/image';

export default function RenderImage({ image, width, height }) {
  return (
    <div
      key={image}
      className={
        width === height
          ? 'img-container square-image'
          : width > height
          ? 'img-container wide-image'
          : 'img-container tall-image'
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
        .square-image {
          grid-column: span 4;
          grid-row: span 4;
        }
        .wide-image {
          grid-column: span 5;
          grid-row: span 4;
        }
        .tall-image {
          grid-row: span 5;
          grid-column: span 4;
        }
      `}</style>
    </div>
  );
}
