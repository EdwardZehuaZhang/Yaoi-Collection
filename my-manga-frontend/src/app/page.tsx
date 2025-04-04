// src/app/page.js
import Link from 'next/link';

export default function Home() {
  return (
    <main className="p-6">
      <section className="text-center mb-10">
        <h1 className="text-4xl font-bold">My Yaoi Manga Collection</h1>
        {/* Hero search bar with logo and tags */}
        <div className="mt-4 flex justify-center">
          <input type="text" placeholder="Search manga..." className="border p-2 w-80 rounded-l" />
          <button className="bg-blue-500 text-white p-2 rounded-r">Search</button>
        </div>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold">Popular Now</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Render MangaCard components for popular mangas */}
        </div>
        <div className="mt-4 text-center">
          <Link href="/manga" className="text-blue-500">
            See More &raquo;
          </Link>
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-semibold">Newly Added</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Render MangaCard components for newly added mangas */}
        </div>
        <div className="mt-4 text-center">
          <Link href="/manga" className="text-blue-500">
            See More &raquo;
          </Link>
        </div>
      </section>
    </main>
  );
}
