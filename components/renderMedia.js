import { useEffect } from 'react';
import RenderImage from './renderImage';
import RenderVideo from './renderVideo';
import styles from '../styles/render_media.module.css';

export default function RenderMedia(data) {
  const pageData = data.props;

  return (
    <div className={styles.images_wrapper}>
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
    </div>
  );
}
