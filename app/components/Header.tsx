import Link from 'next/link';

function Header() {
  return (
    <header>
      <nav>
        <Link href="/">
          <h1>Dashboard</h1>
        </Link>
        <ul>
          <li>
            <Link href="/rpm">RPM</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;