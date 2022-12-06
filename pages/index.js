import Layout from '../components/layout';
import Nav from '../components/nav';
import styles from '../styles/home.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [adClose, setAdClose] = useState(true);

  return (
    <Layout>
      <Nav />
      <div
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
            />
          </div>
        </Link>
        <span onClick={() => setAdClose(false)} className={styles.close_box}>
          <svg className={styles.close_box_svg} width="30" height="30">
            <line className={styles.line_one} x1="0" y1="0" x2="18" y2="18" />
            <line className={styles.line_one} x1="0" y1="18" x2="18" y2="0" />
          </svg>
        </span>
      </div>

      <main className={styles.main_container}>
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
            playsInline
            preload="metadata"
            poster="../images/timelapse/timelapse/timelapse-6-poster.jpg"
          >
            <source
              src="../images/timelapse/timelapse/timelapse-6-720.webm"
              type="video/webm"
            ></source>
            <source
              src="../images/timelapse/timelapse/timelapse-6-720.mp4"
              type="video/mp4"
            ></source>
          </video>
        </div>
        <div className={styles.mandala_container}>
          <svg
            width="300"
            height="300"
            viewBox="65 65 545 545"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class={styles.mandala}
          >
            <title>Mandala</title>
            <defs>
              <path
                d="M337.5,337.5 m-320,0 a320,320 0 1,1 640,0 a320,320 0 1,1 -640,0"
                id="circle1"
              ></path>
              <path
                d="M337.5,337.5 m-280,0 a280,280 0 1,1 560,0 a280,280 0 1,1 -560,0"
                id="circle2"
              ></path>
              <path
                d="M337.5,337.5 m-240,0 a240,240 0 1,1 480,0 a240,240 0 1,1 -480,0"
                id="circle3"
              ></path>
              <path
                d="M337.5,337.5 m-200,0 a200,200 0 1,1 400,0 a200,200 0 1,1 -400,0"
                id="circle4"
              ></path>
              <path
                d="M337.5,337.5 m-160,0 a160,160 0 1,1 320,0 a160,160 0 1,1 -320,0"
                id="circle5"
              ></path>
              <path
                d="M337.5,337.5 m-120,0 a120,120 0 1,1 240,0 a120,120 0 1,1 -240,0"
                id="circle6"
              ></path>
            </defs>
            <text
              class={styles.mandala_accent_1}
              dy="90
            "
              textLength="2100"
            >
              <textPath
                className={styles.textPath}
                textLength="2050"
                href="#circle1"
              >
                <tspan>&nbsp;&nbsp;</tspan>ANDY SAHLSTROM
                <tspan>&nbsp;&nbsp;</tspan>
                <tspan>&equiv;</tspan>
                <tspan>&nbsp;&nbsp;</tspan>
                <tspan>ANDY SAHLSTROM</tspan>
                <tspan>&nbsp;&nbsp;</tspan>
                <tspan>&equiv;</tspan>
                <tspan>&nbsp;&nbsp;</tspan>
              </textPath>
            </text>
            <text class={styles.mandala_accent_2} dy="90" textLength="1760">
              <textPath textLength="1760" href="#circle2">
                <tspan class={styles.interactive}>
                  Interactive Technology
                  Engineer&nbsp;&nbsp;&#125;&#123;&nbsp;&nbsp;
                </tspan>
                <tspan class={styles.inventor}>
                  Inventor&nbsp;&nbsp;&#125;&#123;&nbsp;&nbsp;
                </tspan>
                <tspan class={styles.kinetic}>
                  Kinetic Artist&nbsp;&nbsp;&#125;&#123;&nbsp;&nbsp;
                </tspan>
              </textPath>
            </text>
          </svg>
        </div>

        <svg width="1" height="1">
          <clipPath id="my-clip-path" clipPathUnits="objectBoundingBox">
            <path transform="translate(0.35 0.35) scale(0.7)">
              <animate
                attributeName="d"
                dur="8s"
                repeatCount="indefinite"
                values="M0.305,-0.425 C0.386,-0.363,0.439,-0.262,0.467,-0.157 C0.495,-0.052,0.499,0.056,0.476,0.164 C0.452,0.271,0.4,0.377,0.316,0.434 C0.232,0.491,0.116,0.499,-0.001,0.5 C-0.117,0.5,-0.234,0.493,-0.321,0.437 C-0.41,0.382,-0.469,0.277,-0.495,0.169 C-0.52,0.06,-0.512,-0.052,-0.47,-0.145 C-0.428,-0.238,-0.353,-0.311,-0.269,-0.373 C-0.185,-0.434,-0.092,-0.483,0.01,-0.497 C0.112,-0.51,0.223,-0.486,0.305,-0.425;
					
									M0.257,-0.392 C0.329,-0.318,0.381,-0.233,0.417,-0.138 C0.454,-0.042,0.476,0.064,0.454,0.162 C0.432,0.259,0.366,0.348,0.284,0.401 C0.201,0.455,0.101,0.472,0.004,0.467 C-0.093,0.462,-0.187,0.434,-0.277,0.384 C-0.368,0.333,-0.455,0.26,-0.501,0.16 C-0.546,0.061,-0.55,-0.064,-0.51,-0.169 C-0.47,-0.273,-0.386,-0.355,-0.293,-0.421 C-0.201,-0.488,-0.101,-0.537,-0.004,-0.532 C0.093,-0.526,0.185,-0.465,0.257,-0.392;
                  
                  M0.284,-0.417 C0.374,-0.36,0.458,-0.277,0.482,-0.178 C0.507,-0.077,0.472,0.04,0.436,0.156 C0.401,0.272,0.366,0.387,0.293,0.444 C0.22,0.499,0.11,0.497,0.012,0.478 C-0.086,0.46,-0.172,0.426,-0.254,0.373 C-0.337,0.32,-0.417,0.25,-0.464,0.152 C-0.511,0.054,-0.524,-0.07,-0.493,-0.177 C-0.461,-0.284,-0.384,-0.375,-0.294,-0.432 C-0.204,-0.489,-0.102,-0.513,-0.002,-0.509 C0.097,-0.506,0.194,-0.475,0.284,-0.417;
                  
                  M0.308,-0.425 C0.393,-0.372,0.449,-0.269,0.471,-0.165 C0.493,-0.06,0.481,0.048,0.451,0.153 C0.422,0.258,0.375,0.36,0.297,0.424 C0.219,0.489,0.109,0.517,-0.002,0.52 C-0.113,0.522,-0.226,0.499,-0.319,0.44 C-0.412,0.38,-0.486,0.283,-0.509,0.177 C-0.532,0.071,-0.505,-0.044,-0.462,-0.147 C-0.42,-0.25,-0.364,-0.341,-0.285,-0.397 C-0.205,-0.452,-0.103,-0.471,0.005,-0.478 C0.112,-0.485,0.225,-0.479,0.308,-0.425;
                  
                  M0.305,-0.425 C0.386,-0.363,0.439,-0.262,0.467,-0.157 C0.495,-0.052,0.499,0.056,0.476,0.164 C0.452,0.271,0.4,0.377,0.316,0.434 C0.232,0.491,0.116,0.499,-0.001,0.5 C-0.117,0.5,-0.234,0.493,-0.321,0.437 C-0.41,0.382,-0.469,0.277,-0.495,0.169 C-0.52,0.06,-0.512,-0.052,-0.47,-0.145 C-0.428,-0.238,-0.353,-0.311,-0.269,-0.373 C-0.185,-0.434,-0.092,-0.483,0.01,-0.497 C0.112,-0.51,0.223,-0.486,0.305,-0.425;"
              />
            </path>
          </clipPath>
        </svg>
      </main>
    </Layout>
  );
}
