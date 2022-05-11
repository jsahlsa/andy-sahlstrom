export default function RenderImage({ image }) {
  console.log(image);
  // use crf 28 for mp4, and 31 for webm, seems sensible based on research
  // for poster: ffmpeg -ss 3 -i airless-organ.mp4 -frames:v 1 airless-organ-poster.png
  // or ffmpeg -ss 00:00:01.00 -i input.mp4 -vf 'scale=1800:1800:force_original_aspect_ratio=decrease' -vframes 1 output.jpg
  // could get away with 720

  return (
    <div className="img-container wide-image">
      <video controls preload="metadata">
        <source src={image + '#t=0.1'} type="video/mp4"></source>
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
