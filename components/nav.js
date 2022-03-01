import Link from 'next/link';

export default function Nav() {
  return (
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
  );
}
