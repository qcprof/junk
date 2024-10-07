import Link from 'next/link';
export default function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/" className="text-red-500">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about">About Us</Link>
        </li>
        <li>
          <Link href="/time">Time</Link>
        </li>

      </ul>
      **************
    </nav>
  );
}
