import Link from 'next/link';
import data from '/public/data.json';
import { useEffect, useState } from 'react';
import styles from '../styles/nav.module.css';

export default function Nav() {
  const [pageNameSame, setPageNameSame] = useState(undefined);
  const [isChildLink, setIsChildLink] = useState(false);
  const [open, setOpen] = useState('');
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
    console.log(window.innerWidth);

    setPageNameSame((pageNameSame) => (pageNameSame = pathArray[1]));
  }, []);

  // WOW!!!, finally figured this out with help from https://stackoverflow.com/questions/70810204/how-to-automatically-close-an-open-details-tag-when-another-detail-is-clicked-wi
  // needed onClick not onToggle!!!!! and 2 args to handle preventDefault()
  const toggle = (id) => (e) => {
    e.preventDefault();
    setOpen(id);
  };

  return (
    <>
      <header className={styles.header}>
        <div>
          <a className={styles.main_links_li}>
            <Link href="/">Home</Link>
          </a>
        </div>
        <ul className={styles.mainlinks}>
          {data.map((item, i) => {
            const name = Object.keys(item);
            const parentLink = `/${name[0]}`;
            const values = Object.values(item);
            const newValue = values[0];
            console.log(open);
            if (!newValue[0].name) {
              return (
                <li key={i} className={styles.details_container}>
                  <details
                    id={name[0]}
                    key={i}
                    open={name[0] === open ? true : false}
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
                <li key={i} className>
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
        <div className={styles.communicate}>
          <a className={styles.main_links_li} href="">
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
      </header>
    </>
  );
}
