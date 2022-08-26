import Link from 'next/link';
import data from '/public/data.json';
import { useEffect, useState, useRef } from 'react';
import styles from '../styles/nav.module.css';

export default function Nav() {
  const [pageNameSame, setPageNameSame] = useState(undefined);
  const [isChildLink, setIsChildLink] = useState(false);
  const [open, setOpen] = useState('');
  const [sameMenuName, setSameMenuName] = useState('');
  const barOneEl = useRef(null);
  const barTwoEl = useRef(null);
  const barThreeEl = useRef(null);
  const mainLinksEl = useRef(null);
  // need to find a way to see if a details element is open
  const [menuOpen, setMenuOpen] = useState(false);
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  useEffect(() => {
    const path = window.location.pathname;
    const pathArray = path.split('/');
    if (pathArray.length > 2) {
      setIsChildLink((isChildLink) => (isChildLink = true));
    }
  }, []);

  useEffect(() => {
    const path = window.location.pathname;
    const pathArray = path.split('/');
    setPageNameSame((pageNameSame) => (pageNameSame = pathArray[1]));
  }, []);

  // WOW!!!, finally figured this out with help from https://stackoverflow.com/questions/70810204/how-to-automatically-close-an-open-details-tag-when-another-detail-is-clicked-wi
  // needed onClick not onToggle!!!!! and 2 args to handle preventDefault()
  const toggle = (id) => (e) => {
    e.preventDefault();

    if (!menuOpen) {
      setOpen(id);
    }
    setMenuOpen(false);
    setSameMenuName(id);
  };

  const hamburgerClick = () => {
    if (!hamburgerOpen) {
      barOneEl.current.style.transform = 'rotate(46deg)';
      barTwoEl.current.style.transform = 'translateX(20px)';
      barTwoEl.current.style.opacity = '0';
      barThreeEl.current.style.transform = 'rotate(-43deg)';
      mainLinksEl.current.style.display = 'grid';
      setHamburgerOpen(!hamburgerOpen);
    } else {
      barOneEl.current.style.transform = 'rotate(2deg)';
      barTwoEl.current.style.transform = 'translateX(0px)';
      barTwoEl.current.style.opacity = '1';
      barThreeEl.current.style.transform = 'rotate(2deg)';
      mainLinksEl.current.style.display = 'none';
      setHamburgerOpen(!hamburgerOpen);
    }
  };

  return (
    <>
      <header className={styles.header}>
        <div>
          <Link href="/">
            <a className={styles.main_links_li}>Home</a>
          </Link>
        </div>
        <nav className={styles.nav}>
          <div
            className={
              !hamburgerOpen
                ? styles.hamburger_container
                : styles.hamburger_container_open
            }
            onClick={hamburgerClick}
          >
            <svg viewBox="0 0 100 80" width="40" height="40">
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
          <ul ref={mainLinksEl} className={styles.mainlinks}>
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
                      open={name[0] === open && !menuOpen}
                      onClick={toggle(name[0])}
                    >
                      <summary
                        key={i}
                        className={`${styles.main_links_li} ${styles.main_links_top_right}`}
                      >
                        {name[0]}
                      </summary>
                      <ul>
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
                            <li key={i} className={styles.sub_links_li}>
                              <Link
                                href={
                                  name[0] === pageNameSame && isChildLink
                                    ? subLinkTwo
                                    : subLink
                                }
                              >
                                <a key={i}>{subLinkNamesLinks}</a>
                              </Link>
                            </li>
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
          </ul>
        </nav>
      </header>
      <div className={styles.communicate}>
        <a
          className={`${styles.main_links_li} ${styles.main_links_lower_left}`}
          href=""
        >
          email
        </a>

        <a className={styles.main_links_li} href="">
          phone
        </a>
      </div>
      <div className={styles.insta}>
        <a className={styles.main_links_li} href="">
          insta
        </a>
      </div>
    </>
  );
}
