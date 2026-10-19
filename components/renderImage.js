import Image from "next/image";
import styles from '../styles/render_media.module.css';

export default function RenderImage({ image, width, height, caption, shop }) {
  return (
    <div
      key={image}
      className={
        width === height
          ? `${styles.square_image} ${styles.img_container}`
          : width > height
          ? `${styles.wide_image} ${styles.img_container}`
          : `${styles.tall_image} ${styles.img_container}`
      }
      style={{ position: 'relative' }}
    >
      <Image
        src={image}
        width={width}
        height={height}
        alt={caption}
        sizes="100vw"
        style={{
          width: "100%",
          height: "auto",
          objectFit: "cover"
        }} />
      {shop ? (
        <a className={styles.shop_button} href={shop}>
          shop
        </a>
      ) : null}
    </div>
  );
}
