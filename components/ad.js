import { useState, useLayoutEffect } from 'react';
import { useRef } from 'react';
import { gsap } from 'gsap';

export default function Ad() {
  const adRef = useRef();

  useLayoutEffect(() => {
    console.log(adRef);
    gsap.from(adRef.current, {
      y: '-1000px',
      duration: 2,
      ease: 'elastic.inOut',
      delay: 2,
    });
  }, [adRef]);
  return (
    <div
      ref={adRef}
      className={adClose ? styles.ad_container : styles.ad_container_closed}
    >
      <Link href="/design/kids-toys-adult-issues">
        <div className={styles.ad_image_container}>
          <Image
            src="/images/kids-toys-show.jpeg"
            width={2341}
            height={2240}
            objectFit="cover"
            layout="responsive"
            priority={true}
            alt="Advertisement for Andy's art show, Dec 16th, 2022, 8-10pm, The New Gallery, 127 Tompkins Ave, Brooklyn"
          />
        </div>
      </Link>
      {/* <svg
                    className={styles.banner_svg}
                    width="150"
                    height="40"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <polygon
                    className={styles.banner_polygon}
                    points="0,0 150,0 110,40 40,40"
                    />
                    <text
                    className={styles.svg_banner_text}
                    x="75"
                    y="20"
                    textAnchor="middle"
                    >
                    Art Show!!!
                    </text>
                    <text
                    className={`${styles.svg_banner_text} ${styles.text_line_two}`}
                    x="75"
                    y="32"
                    textAnchor="middle"
                    >
                    12/17 8pm
                    </text>
                </svg> */}
      <span onClick={() => setAdClose(false)} className={styles.close_box}>
        <svg className={styles.close_box_svg} width="30" height="30">
          <line className={styles.line_one} x1="0" y1="0" x2="18" y2="18" />
          <line className={styles.line_one} x1="0" y1="18" x2="18" y2="0" />
        </svg>
      </span>
    </div>
  );
}
