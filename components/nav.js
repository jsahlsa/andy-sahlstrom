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
          console.log(newValue);
          return (
            <details key={i}>
              <summary key={i}>{name[0]}</summary>
              <ul>
                {newValue.map((item, i) => {
                  const newValueKeys = Object.keys(item);
                  return (
                    <li key={i}>
                      <a key={i}>{newValueKeys[0]}</a>
                    </li>
                  );
                })}
              </ul>
            </details>
          );
        })}
      </header>
      <header>
        <div>
          <h1>
            <Link href="/">
              <a>Logo here</a>
            </Link>
          </h1>
        </div>
        <nav>
          <ul>
            <li>
              <Link href="/instruments">
                <a>instruments</a>
              </Link>
            </li>
            <li>
              <Link href="/sculptures">
                <a>sculptures</a>
              </Link>
            </li>
            <li>
              <Link href="/time-lapse">
                <a>time lapse</a>
              </Link>
            </li>
            <li>
              <Link href="/music">
                <a>music</a>
              </Link>
            </li>
            <li>
              <Link href="/design">
                <a>design</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>about</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
