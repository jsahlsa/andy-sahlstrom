import Link from 'next/link';
import data from '/public/data.json';
import { useEffect, useState, useRef } from 'react';
import styles from '../styles/nav.module.css';

const fonts = [
  {
    name: 'Inter',
    key: 1,
    weights: {
      max: 900,
      min: 100,
    },
    slant: {
      max: 0,
      min: -10,
    },
  },
  {
    name: 'Lexend',
    key: 2,
    weights: {
      max: 900,
      min: 100,
    },
  },
  {
    name: 'Signika Negative',
    key: 3,
    weights: {
      max: 700,
      min: 300,
    },
  },
  {
    name: 'Antonio',
    key: 4,
    weights: {
      max: 700,
      min: 300,
    },
  },
  {
    name: 'Fraunces',
    key: 5,
    weights: {
      max: 900,
      min: 100,
    },
    italic: false,
    optical_size: false,
    wonk: false,
    soft: {
      max: 100,
      min: 0,
    },
  },
  {
    name: 'Figtree',
    key: 6,
    weights: {
      max: 900,
      min: 300,
    },
  },
];

export default function Nav() {
  const [open, setOpen] = useState('');
  const [width, setWidth] = useState(null);
  const [darkmode, setDarkmode] = useState(false);
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [font, setFont] = useState('Fraunces');
  const [fontWeight, setFontWeight] = useState(700);
  const [primaryHue, setPrimaryHue] = useState(281);
  const [secondaryHue, setSecondaryHue] = useState(75);
  const [settingsOpen, setSettingsOpen] = useState(false);

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
    --media-border-color: hsl(150, 0%, 30%);
    --scrollbar-color: hsl(75, 50%, 60%);
    --gray-20: hsl(150, 0%, 20%);
    --font-weight: ${fontWeight}; 
    --fraunces: ${font}; 
    --primary-color: hsl(${primaryHue}, 50%, 50%); 
    --secondary-color: hsl(${secondaryHue}, 100%, 70%);
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
    --media-border-color: hsl(150, 0%, 10%);
    --scrollbar-color: hsl(281, 50%, 60%);
    
    --primary-color-background: hsla(281, 50%, 50%, 0.2);
    --secondary-color-background: hsla(75, 50%, 50%, 0.2);
    --primary-color: hsl(281, 50%, 50%);
    --secondary-color: hsl(75, 50%, 50%);
    --border-color: var(--brown-90);
    --bg-dot-one: hsla(0, 0%, 10%, 0.1);
    --bg-dot-two: hsla(0, 0%, 0%, 0);
    --gray-20: hsl(150, 0%, 80%);
    --font-weight: ${fontWeight}; 
    --fraunces: ${font}; 
    --primary-color: hsl(${primaryHue}, 50%, 50%); 
    --secondary-color: hsl(${secondaryHue}, 100%, 70%);
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

  // dynamically set title
  useEffect(() => {
    const path = window.location.pathname;
    const pathClean = path.split('/').pop().split('-');
    console.log(pathClean[0].length);
    if (pathClean[0].length >= 1) {
      const capitalizedTitle = pathClean.map((pathItem) => {
        return pathItem[0].toUpperCase() + pathItem.substring(1);
      });
      document.title = `Andy Sahlstrom | ${capitalizedTitle.join(' ')}`;
    }
  }, []);

  // get font choice from local storage
  useEffect(() => {
    const json = localStorage.getItem('font');
    json && setFont(JSON.parse(json));
    document.documentElement.style.cssText = darkmode
      ? darkStyles
      : lightStyles;
  }, [font]);

  // sets darkmode when page loads if it is true
  useEffect(() => {
    window.addEventListener('load', () => {
      darkmode
        ? (document.documentElement.style.cssText = darkStyles)
        : (document.documentElement.style.cssText = lightStyles);
    });
  }, [darkmode, font]);

  // need to find a way to see if a details element is open

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);
  }, []);

  const handleFontChange = (e) => {
    document.documentElement.style.cssText = `--font-weight: ${fontWeight}; --fraunces: ${font}`;
    setFont(e.target.value);
    darkmode
      ? (document.documentElement.style.cssText = darkStyles)
      : (document.documentElement.style.cssText = lightStyles);
    localStorage.setItem('font', JSON.stringify(e.target.value));
  };

  const handleFontWeight = (e) => {
    setFontWeight(e.target.value);
    darkmode
      ? (document.documentElement.style.cssText = darkStyles)
      : (document.documentElement.style.cssText = lightStyles);
  };

  const handlePrimaryHue = (e) => {
    setPrimaryHue(e.target.value);
    darkmode
      ? (document.documentElement.style.cssText = darkStyles)
      : (document.documentElement.style.cssText = lightStyles);
  };
  const handleSecondaryHue = (e) => {
    setSecondaryHue(e.target.value);
    darkmode
      ? (document.documentElement.style.cssText = darkStyles)
      : (document.documentElement.style.cssText = lightStyles);
  };

  const handleSettingsButton = () => {
    setSettingsOpen(!settingsOpen);
  };

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

  const selected = fonts.filter((item) => item.name === font);
  const notSelected = fonts.filter((item) => item.name !== font);

  return (
    <>
      <div
        className={
          settingsOpen ? styles.font_select : styles.font_select_closed
        }
      >
        <div
          className={
            settingsOpen ? styles.settings_button : styles.settings_button_open
          }
          onClick={handleSettingsButton}
        >
          <svg>
            <polygon
              className={settingsOpen ? styles.polygon : styles.polygon_rotate}
              points="10,10 25,20 10,30"
            />
          </svg>
        </div>
        <div>
          <label htmlFor="font-select">Header font: </label>
          <select
            name="header-font"
            id="font-select"
            onChange={handleFontChange}
            className={styles.select}
          >
            <option value={selected[0].name}>{selected[0].name}</option>
            {notSelected.map((item) => {
              return (
                <option key={item.key} value={item.name}>
                  {item.name}
                </option>
              );
            })}
          </select>
          {selected.map(
            (item) =>
              item.weights && (
                <>
                  <label htmlFor="weight">Font Weight</label>
                  <input
                    type="range"
                    className={styles.settings_range}
                    id="weight"
                    max={item.weights.max}
                    min={item.weights.min}
                    onChange={handleFontWeight}
                    value={
                      fontWeight > item.weights.max
                        ? item.weights.max
                        : fontWeight < item.weights.min
                        ? item.weights.min
                        : fontWeight
                    }
                  />
                  <div className={styles.range_values_container}>
                    <span className={styles.min_weight}>
                      {item.weights.min}
                    </span>
                    <span className={styles.max_weight}>
                      {item.weights.max}
                    </span>
                  </div>
                </>
              )
          )}
        </div>
        <div>
          <label htmlFor="primary-hue">Primary hue</label>
          <input
            id="primary-hue"
            type="range"
            max="360"
            min="0"
            value={primaryHue}
            onChange={handlePrimaryHue}
            className={styles.settings_range}
          />
        </div>
        <label htmlFor="secondary-hue">Secondary hue</label>
        <input
          id="secondary-hue"
          type="range"
          max="360"
          min="0"
          value={secondaryHue}
          onChange={handleSecondaryHue}
          className={styles.settings_range}
        />
      </div>
      <header className={!hamburgerOpen ? styles.header : styles.header_open}>
        <div className={!hamburgerOpen ? styles.home : styles.home_open}>
          <Link href="/">
            <a className={styles.home_link}>
              <svg
                version="1.1"
                className={
                  !hamburgerOpen ? styles.home_logo : styles.home_logo_open
                }
                id="Layer_1"
                viewBox="15 0 60 60"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className={
                    !hamburgerOpen
                      ? styles.outside_path
                      : styles.outside_path_open
                  }
                  d="M67.9,28.9l0.3,1.4h-7.4V36c0,0-0.1,0-0.1,0c-2,0-3.7,0.5-5.3,1.4c-1.4-4.4-4.9-7-9.8-7c-1.4,0-2.6,0.2-3.6,0.5
	H28.1l0.1,3.6c0,0.9,0,1.9,0,2.9l-2.3-7H12.5L3.4,59.1H17l1.3-4.2h1.6l1.3,4.2h7h7.1h20.8v-0.4c1.2,0.5,2.5,0.8,3.9,0.8
	c1.1,0,2.1-0.1,3-0.4h7.5l0.6,0.1c1,0.2,2.3,0.4,2.9,0.5c0.8,0.1,1.4,0.1,2.1,0.1c6.2,0,8.5-4.1,10.5-8.6L95.2,32L67.9,28.9z"
                />
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
                  <li key={i + 'main'} className={styles.details_container}>
                    <details
                      id={name[0]}
                      key={i + 'details'}
                      open={name[0] === open}
                      onClick={toggle(name[0])}
                    >
                      <Link href={name[0] === open ? parentLink : ''}>
                        <summary
                          key={i + 'summary'}
                          className={`${styles.main_links_li} ${styles.main_links_top_right}`}
                        >
                          {name[0]}
                        </summary>
                      </Link>
                      <ul
                        key="sublinks"
                        className={`${
                          !hamburgerOpen
                            ? styles.sub_link_container
                            : styles.sub_link_container_open
                        } ${
                          newValue.length > 8
                            ? styles.two_column
                            : styles.one_column
                        }`}
                      >
                        {newValue.map((item, j) => {
                          const newValueKeys = Object.keys(item);
                          const subLinkNames = newValueKeys[0]
                            .split('_')
                            .join('-');
                          const subLinkNamesLinks = newValueKeys[0]
                            .split('_')
                            .join(' ');
                          const subLink = `/${name[0]}/${subLinkNames}`;
                          return (
                            <Link key={j} href={subLink}>
                              <li
                                key={j + 'sublinks'}
                                className={
                                  !hamburgerOpen
                                    ? styles.sub_links_li
                                    : styles.sub_links_li_open
                                }
                              >
                                <a key={j + 'sublinkLink'}>
                                  {subLinkNamesLinks}
                                </a>
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
                  <li key={i + 'sub'}>
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
              key="email"
              className={
                !hamburgerOpen ? styles.communicate : styles.communicate_open
              }
            >
              <a
                className={styles.main_links_li}
                href="mailto:domesticohm@gmail.com?subject=Hi Andy!"
              >
                <svg
                  version="1.1"
                  className={styles.svg_shapes}
                  width="25"
                  height="25"
                  viewBox="4 0 90 90"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    className={styles.email_solid}
                    x="8.6"
                    y="18.6"
                    width="81.7"
                    height="52.8"
                  />
                  <polyline
                    className={styles.email_line}
                    points="8.6,18.6 49.5,45 90.4,18.6 "
                  />
                </svg>
              </a>

              <a
                className={styles.main_links_li}
                href="sms:+1-320-260-9212?&body=Hi%20Andy!"
              >
                <svg
                  version="1.1"
                  className={styles.svg_shapes}
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
            <li
              key="insta"
              className={!hamburgerOpen ? styles.insta : styles.insta_open}
            >
              <a
                className={styles.main_links_li}
                href="https://instagram.com/shampoooty"
                target="_blank"
              >
                <svg
                  vversion="1.1"
                  className={styles.svg_shapes}
                  width="25"
                  height="25"
                  viewBox="4 0 90 90"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    className={styles.email_solid}
                    x="8.6"
                    y="4.5"
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
      <div
        className={
          !hamburgerOpen ? styles.darkmode_div : styles.darkmode_div_open
        }
      >
        <label htmlFor="dark_mode" className={styles.dark_mode_label}>
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
