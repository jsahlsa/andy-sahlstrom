import styles from '../styles/render_media.module.css';

export default function RenderImage({ image, webm, poster }) {
  console.log(image);
  // use crf 28 for mp4, and 31 for webm, seems sensible based on research
  // ffmpeg -i airless-organ.mp4 -vf scale=1080:-1 -preset veryslow -crf 28 airless-organ-veryslow-1080-crf28.mp4
  // ffmpeg -i airless-organ.mp4 -c:v libvpx-vp9 -vf scale=1080:-1 -preset veryslow -crf 30 airless-organ-1080-veryslow-crf30.webm
  // for poster: ffmpeg -ss 3 -i airless-organ.mp4 -frames:v 1 airless-organ-poster.png
  // or ffmpeg -ss 00:00:01.00 -i input.mp4 -vf 'scale=1800:1800:force_original_aspect_ratio=decrease' -vframes 1 output.jpg
  // could get away with 720

  return (
    <div className={`${styles.img_container} ${styles.wide_image}`}>
      <video controls preload="metadata" poster={poster}>
        <source src={webm} type="video/webm"></source>
        <source src={image} type="video/mp4"></source>
      </video>
    </div>
  );
}
