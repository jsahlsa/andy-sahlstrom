import Image from 'next/image';
import styles from '../styles/render_media.module.css';

export default function RenderImage({ image, width, height }) {
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
        layout="responsive"
        width={width / 2}
        height={height / 2}
        objectFit="cover"
      />
      <style jsx>{``}</style>
    </div>
  );
}
