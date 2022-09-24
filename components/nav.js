import Link from 'next/link';
import data from '/public/data.json';
import { useEffect, useState, useRef } from 'react';
import styles from '../styles/nav.module.css';

export default function Nav() {
  const [open, setOpen] = useState('');
  const [width, setWidth] = useState(null);
  const [darkmode, setDarkmode] = useState(false);
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const barOneEl = useRef(null);
  const barTwoEl = useRef(null);
  const barThreeEl = useRef(null);
  const mainLinksEl = useRef(null);
  const svgEl = useRef(null);
  const darkmodeEl = useRef(null);

  const darkStyles = `
    --brown-90: hsl(26, 50%, 95%);
    --brown-80: hsl(26, 50%, 90%);
    --brown-70: hsl(26, 50%, 80%);
    --brown-60: hsl(26, 50%, 70%);
    --brown-50: hsl(26, 50%, 60%);
    --brown-40: hsl(26, 50%, 50%);
    --brown-30: hsl(26, 50%, 40%);
    --brown-20: hsl(26, 50%, 30%);
    --brown-10: hsl(26, 50%, 20%);
    --brown-05: hsl(26, 50%, 10%);
    --primary-color-background: hsla(281, 50%, 10%, 0.8);
    --secondary-color-background: hsla(75, 50%, 10%, 0.8);
    --primary-color: hsl(281, 100%, 70%);
    --secondary-color: hsl(75, 100%, 70%);
    --border-color: hsl(var(--secondary-hue), 100%, 80%);
    --bg-dot-one: hsla(0, 0%, 30%, 0.3);
    --bg-dot-two: hsla(0, 0%, 0%, 0);
  `;

  const lightStyles = `
    --brown-05: hsl(26, 50%, 95%);
    --brown-10: hsl(26, 50%, 90%);
    --brown-20: hsl(26, 50%, 80%);
    --brown-30: hsl(26, 50%, 70%);
    --brown-40: hsl(26, 50%, 60%);
    --brown-50: hsl(26, 50%, 50%);
    --brown-60: hsl(26, 50%, 40%);
    --brown-70: hsl(26, 50%, 30%);
    --brown-80: hsl(26, 50%, 20%);
    --brown-90: hsl(26, 50%, 10%);
    --primary-color-background: hsla(281, 50%, 50%, 0.2);
    --secondary-color-background: hsla(75, 50%, 50%, 0.2);
    --primary-color: hsl(281, 50%, 50%);
    --secondary-color: hsl(75, 50%, 50%);
    --border-color: var(--brown-90);
    --bg-dot-one: hsla(0, 0%, 10%, 0.1);
    --bg-dot-two: hsla(0, 0%, 0%, 0);
  `;

  // checks localStorage for preference
  // if none, grabs system preference and sets dark mode state
  useEffect(() => {
    const json = localStorage.getItem('andys-theme');
    if (json) {
      const currentTheme = JSON.parse(json);
      // dark mode in localStorage = false
      setDarkmode(!currentTheme);
    } else {
      const getCurrentTheme = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;
      setDarkmode(getCurrentTheme);
    }
  }, []);

  // sets darkmode when page loads if it is true
  useEffect(() => {
    window.addEventListener('load', () => {
      if (darkmode) {
        document.documentElement.style.cssText = darkStyles;
      }
    });
  }, [darkmode]);

  // need to find a way to see if a details element is open

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);
  }, []);

  // WOW!!!, finally figured this out with help from https://stackoverflow.com/questions/70810204/how-to-automatically-close-an-open-details-tag-when-another-detail-is-clicked-wi
  // needed onClick not onToggle!!!!! and 2 args to handle preventDefault()
  const toggle = (id) => (e) => {
    e.preventDefault();
    const currentTarget = e.target.innerHTML;

    setOpen(currentTarget);
    if (currentTarget === open) {
      setOpen(false);
    }
  };
  const handleDarkModeToggle = () => {
    console.log('darkmode: ' + darkmode);
    if (!darkmode) {
      // darkmodeEl.current.checked = true;
      document.documentElement.style.cssText = darkStyles;

      setDarkmode(!darkmode);
    } else {
      // darkmodeEl.current.checked = false;
      document.documentElement.style.cssText = lightStyles;

      setDarkmode(!darkmode);
    }
    const json2 = JSON.stringify(darkmode);
    localStorage.setItem('andys-theme', json2);
  };

  const hamburgerClick = () => {
    if (width < 1000) {
      if (!hamburgerOpen) {
        barOneEl.current.style.transform = 'rotate(46deg)';
        barTwoEl.current.style.transform = 'translateX(20px)';
        barTwoEl.current.style.opacity = '0';
        barThreeEl.current.style.transform = 'rotate(-43deg)';
        setHamburgerOpen(!hamburgerOpen);
      } else {
        barOneEl.current.style.transform = 'rotate(2deg)';
        barTwoEl.current.style.transform = 'translateX(0px)';
        barTwoEl.current.style.opacity = '1';
        barThreeEl.current.style.transform = 'rotate(2deg)';
        setHamburgerOpen(!hamburgerOpen);
      }
    }
  };

  return (
    <>
      <header className={!hamburgerOpen ? styles.header : styles.header_open}>
        <div className={!hamburgerOpen ? styles.home : styles.home_open}>
          <Link href="/">
            <a className={styles.home_link}>
              <svg
                version="1.1"
                className={styles.home_logo}
                width="400"
                height="100"
                viewBox="60 25 75 75"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className={styles.path_a}
                  d="M15.7,51.4l-1.3,4.2H8.2l6.9-21.8h8.3l7.2,21.8h-6.7l-1.3-4.2H15.7z M21.4,46.7c-1-3.4-1.9-6.5-2.4-8.6h-0.1
	c-0.5,2.3-1.3,5.5-2.2,8.6H21.4z"
                />
                <path
                  className={styles.path_a}
                  d="M31.7,39.9c0-1.8,0-3.8-0.1-5.5h7.7c0.1,0.5,0.2,1.7,0.2,2.3c0.8-1.2,2.6-2.9,6-2.9c4.2,0,6.9,2.9,6.9,8.1v13.7h-7.9V42.9
	c0-2-0.6-3.2-2.4-3.2c-1.6,0-2.7,0.9-2.7,3.8v12.1h-7.9V39.9z"
                />
                <path
                  className={styles.path_a}
                  d="M70.2,33.9v17c0,1.6,0,3.4,0,4.8h-5.7c-0.1-0.5-0.2-1.1-0.2-1.5c-0.8,1.2-2,1.9-4.3,1.9c-4.1,0-6.4-3.5-6.4-8.2
	c0-4.8,2.6-8.4,7-8.4c1.9,0,3.2,0.6,3.6,1.3v-6.9H70.2z M59.7,47.7c0,2.8,0.8,4.2,2.5,4.2c2.2,0,2.4-2,2.4-4.2
	c0-2.6-0.2-4.2-2.3-4.2C60.5,43.6,59.7,44.9,59.7,47.7z"
                />
                <path
                  className={styles.path_a}
                  d="M79,33.7c0.6,4.3,1.2,9.7,1.2,11.5l0.1,0c0.6-2.1,1.7-5.6,3.6-10.9l6,0.7l-6.7,15c-2.3,5.1-3.8,7-9,6.4
	c-0.4,0-1.6-0.2-2.5-0.4l0.5-4.4c0.2,0,0.7,0.1,1.1,0.2c1.4,0.2,2.2-0.1,2.8-1.3l-4-17.4L79,33.7z"
                />
                <path
                  className={styles.outside_path}
                  d="M67.9,28.9l0.3,1.4h-7.4V36c0,0-0.1,0-0.1,0c-2,0-3.7,0.5-5.3,1.4c-1.4-4.4-4.9-7-9.8-7c-1.4,0-2.6,0.2-3.6,0.5
	H28.1l0.1,3.6c0,0.9,0,1.9,0,2.9l-2.3-7H12.5L3.4,59.1H17l1.3-4.2h1.6l1.3,4.2h7h7.1h20.8v-0.4c1.2,0.5,2.5,0.8,3.9,0.8
	c1.1,0,2.1-0.1,3-0.4h7.5l0.6,0.1c1,0.2,2.3,0.4,2.9,0.5c0.8,0.1,1.4,0.1,2.1,0.1c6.2,0,8.5-4.1,10.5-8.6L95.2,32L67.9,28.9z"
                />
              </svg>
            </a>
          </Link>
        </div>

        <nav className={!hamburgerOpen ? styles.nav : styles.nav_open}>
          <div
            className={
              !hamburgerOpen
                ? styles.hamburger_container
                : styles.hamburger_container_open
            }
            onClick={hamburgerClick}
          >
            <svg ref={svgEl} viewBox="0 0 100 80" width="40" height="40">
              <rect
                ref={barOneEl}
                className={`${styles.barone} ${styles.bars}`}
                width="100"
                height="15"
              ></rect>
              <rect
                ref={barTwoEl}
                className={`${styles.bartwo} ${styles.bars}`}
                y="32"
                width="85"
                height="15"
              ></rect>
              <rect
                ref={barThreeEl}
                className={`${styles.barthree} ${styles.bars}`}
                y="65"
                width="100"
                height="15"
              ></rect>
            </svg>
          </div>

          <ul
            ref={mainLinksEl}
            className={
              !hamburgerOpen ? styles.mainlinks : styles.mainlinks_open
            }
          >
            {data.map((item, i) => {
              const name = Object.keys(item);
              const parentLink = `/${name[0]}`;
              const values = Object.values(item);
              const newValue = values[0];
              if (!newValue[0].name) {
                return (
                  <li key={i} className={styles.details_container}>
                    <details
                      id={name[0]}
                      key={i}
                      open={name[0] === open}
                      onClick={toggle(name[0])}
                    >
                      <summary
                        key={i}
                        className={`${styles.main_links_li} ${styles.main_links_top_right}`}
                      >
                        {name[0]}
                      </summary>
                      <ul
                        className={
                          !hamburgerOpen
                            ? styles.sub_link_container
                            : styles.sub_link_container_open
                        }
                      >
                        {newValue.map((item, i) => {
                          const newValueKeys = Object.keys(item);
                          const subLinkNames = newValueKeys[0]
                            .split('_')
                            .join('-');
                          const subLinkNamesLinks = newValueKeys[0]
                            .split('_')
                            .join(' ');
                          const subLink = `/${name[0]}/${subLinkNames}`;
                          const subLinkTwo = `${subLinkNames}`;
                          return (
                            <Link href={subLink}>
                              <li
                                key={i}
                                className={
                                  !hamburgerOpen
                                    ? styles.sub_links_li
                                    : styles.sub_links_li_open
                                }
                              >
                                <a key={i}>{subLinkNamesLinks}</a>
                              </li>
                            </Link>
                          );
                        })}
                      </ul>
                    </details>
                  </li>
                );
              } else {
                return (
                  <li key={i}>
                    <Link href={parentLink}>
                      <a
                        className={`${styles.main_links_li} ${styles.main_links_top_right}`}
                      >
                        {name[0]}
                      </a>
                    </Link>
                  </li>
                );
              }
            })}
            <li
              className={
                !hamburgerOpen ? styles.communicate : styles.communicate_open
              }
            >
              <a className={styles.main_links_li} href="">
                <svg
                  version="1.1"
                  class={styles.svg_shapes}
                  width="25"
                  height="25"
                  viewBox="0 -5 90 90"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    className={styles.email_solid}
                    x="8.6"
                    y="18.6"
                    class="st0"
                    width="81.7"
                    height="52.8"
                  />
                  <polyline
                    class={styles.email_line}
                    points="8.6,18.6 49.5,45 90.4,18.6 "
                  />
                </svg>
              </a>

              <a className={styles.main_links_li} href="">
                <svg
                  version="1.1"
                  class={styles.svg_shapes}
                  width="25"
                  height="25"
                  viewBox="0 -5 90 90"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className={styles.phone}
                    d="M28.1,77.3c7-1.7,27.4-7.3,36.7-17.8c9.9-11.2,12.1-33.2,12.5-38.7c1.1-7.6-4.4-15-13-18.5c-3.2-1.3-7,0.1-7.4,2.8
	l-3.6,24.9c-0.4,2.7,2.8,5.1,6.3,4.8c2.5-0.2,4.8-0.8,6.9-1.7c-1.6,7.4-4.2,15.6-8.4,20.4c-4.3,4.8-12.4,8.7-19.9,11.4
	c0.6-2.6,0.9-5.6,0.6-8.6c-0.3-3.8-3.2-6.9-5.9-6.1L8.9,57.5c-2.6,0.8-3.4,5-1.5,8.3c4.5,7.9,11.6,12.7,18.3,12l0,0.1
	c0.1,0,0.3-0.1,0.7-0.1C26.9,77.6,27.5,77.5,28.1,77.3C28,77.4,28.1,77.3,28.1,77.3z"
                  />
                </svg>
              </a>
            </li>
            <li className={!hamburgerOpen ? styles.insta : styles.insta_open}>
              <a className={styles.main_links_li} href="">
                <svg
                  vversion="1.1"
                  class={styles.svg_shapes}
                  width="25"
                  height="25"
                  viewBox="0 -5 90 90"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    className={styles.email_solid}
                    x="8.6"
                    y="4.5"
                    class="st0"
                    width="81.7"
                    height="81"
                  />
                  <circle
                    className={styles.email_solid}
                    cx="49.5"
                    cy="45"
                    r="16.2"
                  />
                  <circle
                    className={styles.email_solid}
                    cx="71.9"
                    cy="20.8"
                    r="5"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <div className={styles.darkmode_div}>
        <label for="dark_mode" className={styles.dark_mode_label}>
          <input
            ref={darkmodeEl}
            name="dark_mode"
            className={styles.dark_mode}
            type="checkbox"
            onChange={handleDarkModeToggle}
            checked={darkmode}
          />
        </label>
      </div>
    </>
  );
}
