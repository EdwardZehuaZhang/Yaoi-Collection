// src/components/MangaCard.js
import Link from 'next/link';

export default function MangaCard({ manga }) {
  return (
    <div className="border rounded p-4 hover:shadow-lg">
      <Link href={`/manga/${manga.id}`}>

        <img
          src={manga.attributes.coverImage || '/placeholder.jpg'}
          alt={manga.attributes.title}
          className="w-full h-48 object-cover rounded"
        />
        <h3 className="mt-2 font-semibold">{manga.attributes.title}</h3>

      </Link>
    </div>
  );
}
