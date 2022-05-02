import Link from 'next/link';
import data from '/public/data.json';

export default function Nav() {
  return (
    <>
      <header>
        {data.map((item, i) => {
          const name = Object.keys(item);
          const values = Object.values(item);
          const newValue = values[0];
          return (
            <details key={i}>
              <summary key={i}>
                <Link href={name[0]}>
                  <a>{name[0]}</a>
                </Link>
              </summary>
              <ul>
                {newValue.map((item, i) => {
                  const newValueKeys = Object.keys(item);
                  const subLinkNames = newValueKeys[0].split('_').join('-');
                  const subLink = `${name[0]}/${subLinkNames}`;
                  return (
                    <li key={i}>
                      <Link href={subLink}>
                        <a key={i}>{newValueKeys[0]}</a>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </details>
          );
        })}
      </header>
    </>
  );
}
