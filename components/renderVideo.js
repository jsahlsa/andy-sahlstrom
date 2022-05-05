export default function RenderImage({ image }) {
  console.log(image);
  return (
    <div className="img-container wide-image">
      <video controls>
        <source src={image} type="video/mp4"></source>
      </video>

      <style jsx>{`
        video {
          width: 100%;
          height: auto;
        }
        .img-container {
          object-fit: cover;
          display: grid;
          width: 100%;
          height: 100%;
        }
        .wide-image {
          grid-column: span 6;
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
