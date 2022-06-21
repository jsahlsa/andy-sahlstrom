import Link from 'next/link';
import Layout from '../components/layout';
import Nav from '../components/nav';
import { gsap } from 'gsap';
import styles from '../styles/home.module.css';
import { useEffect, useRef } from 'react';

export default function Home() {
  const circleRef = useRef();

  useEffect(() => {
    gsap.to(circleRef.current, {
      rotation: 20,
      duration: 10,
    });
  }, []);

  return (
    <Layout>
      <Nav />

      <main>
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <path
              ref={circleRef}
              id="MyPath"
              fill="none"
              d="M 25, 50
    a 25,25 0 1,1 50,0
    a 25,25 0 1,1 -50,0"
            />
          </defs>

          <text>
            <textPath href="#MyPath">Andy Sahlstrom</textPath>
          </text>
        </svg>

        <p className="description">
          Gonna be building in plain sight using{' '}
          <a href="https://nextjs.org">NEXT.JS</a>
        </p>
        <div className={styles.videoContainerContainer}>
          <div
            className={styles.main_video_container}
            style={{
              clipPath: 'url(#my-clip-path)',
            }}
          >
            <video
              className={styles.video}
              autoPlay
              muted
              loop
              preload="metadata"
            >
              <source
                src="../images/timelapse/timelapse/timelapse-14-720.webm"
                type="video/webm"
              ></source>
            </video>
          </div>
        </div>

        <svg className={styles.svg}>
          <clipPath id="my-clip-path" clipPathUnits="objectBoundingBox">
            <path d="M0.832,0.004 H0.179 H0.087 C0.05,0.004,0.002,0.052,0.002,0.166 C0.002,0.28,0.047,0.34,0.087,0.34 H0.179 C0.205,0.34,0.222,0.368,0.222,0.419 C0.222,0.47,0.202,0.498,0.179,0.498 H0.121 C0.103,0.498,0.076,0.529,0.076,0.573 C0.076,0.617,0.1,0.66,0.121,0.66 H0.247 C0.272,0.66,0.296,0.707,0.296,0.751 C0.296,0.795,0.272,0.838,0.247,0.838 H0.202 C0.179,0.838,0.148,0.854,0.148,0.917 C0.148,0.98,0.175,1,0.202,1 H0.883 C0.907,1,0.922,0.968,0.922,0.917 C0.922,0.866,0.905,0.838,0.883,0.838 H0.832 C0.804,0.838,0.783,0.796,0.783,0.723 C0.783,0.651,0.8,0.609,0.832,0.609 H0.922 C0.96,0.609,1,0.574,1,0.498 C1,0.422,0.959,0.391,0.922,0.391 H0.747 C0.721,0.391,0.691,0.363,0.691,0.281 C0.691,0.198,0.717,0.166,0.747,0.166 H0.832 C0.863,0.166,0.883,0.157,0.883,0.087 C0.883,0.017,0.867,0.004,0.832,0.004"></path>
          </clipPath>
        </svg>

        <Link href="/instruments">
          <a>instruments</a>
        </Link>
      </main>

      <footer>
        <p>coming soon…</p>
      </footer>
    </Layout>
  );
}
