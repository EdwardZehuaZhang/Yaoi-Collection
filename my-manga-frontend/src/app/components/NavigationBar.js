// src/components/NavigationBar.js
import Link from 'next/link';

export default function NavigationBar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <Link href="/" className="text-xl font-bold">
          My Manga
        </Link>
        <div className="space-x-4">
          <Link href="/tags">Tags</Link>
          <Link href="/artists">Artists</Link>
          <Link href="/characters">Characters</Link>
          <Link href="/groups">Groups</Link>
        </div>
      </div>
    </nav>
  );
}
