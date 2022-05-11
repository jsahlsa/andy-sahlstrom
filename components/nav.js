import Link from 'next/link';
import data from '/public/data.json';
import { useEffect, useState } from 'react';

export default function Nav() {
  const [pageNameSame, setPageNameSame] = useState(undefined);
  const [isChildLink, setIsChildLink] = useState(false);
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
  return (
    <>
      <header>
        <div>
          <Link href="/">Home</Link>
        </div>
        <ul>
          {data.map((item, i) => {
            const name = Object.keys(item);
            const parentLink = `/${name[0]}`;
            const values = Object.values(item);
            const newValue = values[0];
            if (!newValue[0].name) {
              return (
                <li key={i}>
                  <details key={i}>
                    <summary key={i}>
                      <Link href={parentLink}>
                        <a>{name[0]}</a>
                      </Link>
                    </summary>
                    <ul>
                      {newValue.map((item, i) => {
                        const newValueKeys = Object.keys(item);
                        const subLinkNames = newValueKeys[0]
                          .split('_')
                          .join('-');
                        const subLink = `/${name[0]}/${subLinkNames}`;
                        const subLinkTwo = `${subLinkNames}`;
                        return (
                          <li key={i}>
                            <Link
                              href={
                                name[0] === pageNameSame && isChildLink
                                  ? subLinkTwo
                                  : subLink
                              }
                              replace
                            >
                              <a key={i}>{newValueKeys[0]}</a>
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
                    <a>{name[0]}</a>
                  </Link>
                </li>
              );
            }
          })}
        </ul>
      </header>
    </>
  );
}
